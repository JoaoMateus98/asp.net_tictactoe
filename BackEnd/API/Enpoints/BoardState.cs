using System.Text.Json;
using API;

namespace API.Enpoints;

public static class BoardState
{
    public static async Task<IResult> GetBoardState()
    {
        string fileContent;
        using (StreamReader sr = new StreamReader(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Read, FileShare.None)))
        {
            fileContent = await sr.ReadToEndAsync();
        }

        SaveFile? saveFile = JsonSerializer.Deserialize<SaveFile>(fileContent);

        return TypedResults.Ok(saveFile?.Board);
    }

    public static async Task<IResult> UpdateBoardState(Board board)
    {
        string fileContent;

        using (StreamReader sr = new StreamReader(new FileStream(@"SaveFile.json", FileMode.Open, FileAccess.Read, FileShare.None)))
        {
            fileContent = await sr.ReadToEndAsync();
        }

        SaveFile? saveFile = JsonSerializer.Deserialize<SaveFile>(fileContent);

        if (saveFile is not null) 
        {
            saveFile.Board = board;

            JsonSerializerOptions options = new()
            {
                WriteIndented = true,
            };

            string serializedSaveData = JsonSerializer.Serialize(saveFile, options);

            File.WriteAllText(@"SaveFile.json", serializedSaveData);
        }

        return TypedResults.Created("/boardState");
    }
}
