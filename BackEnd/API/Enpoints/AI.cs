using System.Reflection;
using System.Text.Json;

namespace API.Enpoints;

public static class AI
{
    public static SaveFile? GameState { get; set; }
    public static async Task<IResult> MakeMove()
    {
        string? botPick = await PickTileAsync();

        if (botPick is null)
        {
            return TypedResults.Ok("draw");
        }

        SetTilePropertyValue(botPick);

        await SaveToFileAsync();

        return TypedResults.Ok($"bot picked {botPick}");
    }

    private static async Task<string> PickTileAsync()
    {
        List<string> openTiles = new();

        string fileContent;
        using (StreamReader sr = new StreamReader(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Read, FileShare.None)))
        {
            fileContent = await sr.ReadToEndAsync();
        }

        GameState = JsonSerializer.Deserialize<SaveFile>(fileContent);

        Type tilesType = GameState.Board.tiles.GetType();

        foreach (PropertyInfo property in tilesType.GetProperties())
        {
            int? value = (int?)property.GetValue(GameState.Board.tiles);

            if (value == 0)
            {
                openTiles.Add(property.Name);
            }
        }
        string? botPick;

        try
        {
            botPick = openTiles[new Random().Next(openTiles.Count)];
        }
        catch
        {
            // ran out of tiles
            botPick = null;
        }


        return botPick;
    }

    private static void SetTilePropertyValue(string botPick)
    {
        Type tilesType = GameState.Board.tiles.GetType();

        PropertyInfo chosenPropery = (from p in tilesType.GetProperties()
                                      where p.Name == botPick
                                      select p).First();

        chosenPropery.SetValue(GameState.Board.tiles, 2);
    }

    private static async Task SaveToFileAsync()
    {
        JsonSerializerOptions options = new()
        {
            WriteIndented = true,
        };

        string serializedContent = JsonSerializer.Serialize(GameState, options);

        using (StreamWriter sw = new StreamWriter(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Write, FileShare.None)))
        {
            await sw.WriteAsync(serializedContent);
        }
    }
}
