namespace API;

public record Board
{
    public Tiles tiles { get; set; }
    public record Tiles 
    {
        public int tile1 { get; set; }
        public int tile2 { get; set; }
        public int tile3 { get; set; }
        public int tile4 { get; set; }
        public int tile5 { get; set; }
        public int tile6 { get; set; }
        public int tile7 { get; set; }
        public int tile8 { get; set; }
        public int tile9 { get; set; }
        
    }
}

