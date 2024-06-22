using System.Text.Json;
using API;

namespace API.Enpoints;

public static class BoardState
{
    public static IResult GetBoardState()
    {
        string fileContent = File.ReadAllText(@"SaveFile.json");

        SaveFile? saveFile = JsonSerializer.Deserialize<SaveFile>(fileContent);

        return TypedResults.Ok(saveFile?.Board);
    }

    public static IResult UpdateBoardState(Board board)
    {
        var fileContent = File.ReadAllText(@"SaveFile.json");

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
