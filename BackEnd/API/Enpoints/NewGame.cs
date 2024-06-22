using System.Reflection;
using System.Text.Json;

namespace API.Enpoints;

public static class NewGame
{
    private static SaveFile? GameState {  get; set; }
    public static async Task<IResult> ClearBoard()
    {
        await ResetSaveFileProperties();

        await SaveToFile();

        return TypedResults.Ok("new game baby!!!");
    }

    private static async Task ResetSaveFileProperties()
    {
        using (StreamReader sr = new StreamReader(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Read, FileShare.None)))
        {
            string fileContent = await sr.ReadToEndAsync();
            GameState = JsonSerializer.Deserialize<SaveFile>(fileContent);
        }
        
        Type tilesType = GameState.Board.tiles.GetType();

        foreach (PropertyInfo property in tilesType.GetProperties()) 
        {
            property.SetValue(GameState.Board.tiles, 0);
        }
    }

    private static async Task SaveToFile()
    {
        JsonSerializerOptions options = new()
        {
            WriteIndented = true,
        };

        string serializedContent = JsonSerializer.Serialize(GameState, options);

        using(StreamWriter sw = new StreamWriter(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Write, FileShare.None)))
        {
            await sw.WriteAsync(serializedContent);
        }
    }
}
