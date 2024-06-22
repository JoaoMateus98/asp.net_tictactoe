using System.Text.Json;
using API;

namespace API.Enpoints;

public static class BoardState
{
    public static IResult GetBoardState()
    {
        using(var sr = new StreamReader(File.OpenRead(@"SaveFile.json")))
        {
            string fileContent = sr.ReadToEnd();

            SaveFile? saveFile = JsonSerializer.Deserialize<SaveFile>(fileContent);

            return TypedResults.Ok(saveFile?.BoardLastState);
        }
    }
}
