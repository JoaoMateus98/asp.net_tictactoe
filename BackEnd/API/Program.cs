var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/test", IResult () => TypedResults.Ok("got it"));

app.Run();
