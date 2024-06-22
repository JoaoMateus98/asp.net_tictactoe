namespace API;

public record SaveFile
{
    public int PlayerWins { get; set; }
    public int BotWins { get; set; }
    public Board? Board { get; set; }
}
