using System.Text;
using System.Text.Json;
using API;
using API.Enpoints;

const string AllowCORSPolicy = "MyPolicy"; // this can be called anything. its an arbitrary name for the policy

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowCORSPolicy,
        policy =>
        {
            policy.WithOrigins("http://127.0.0.1:5500")
                .AllowAnyHeader();
        });
});

var app = builder.Build();

app.UseCors(AllowCORSPolicy);



app.MapGet("/aiMove", Task<IResult> () => AI.MakeMove());

app.MapGet("/newGame", Task<IResult> () => NewGame.ClearBoard());

app.MapGet("/boardState", Task<IResult> () => BoardState.GetBoardState());

app.MapPost("/boardState", Task<IResult> (Board board) => BoardState.UpdateBoardState(board));

app.Run();
record Person(string FirstName, string LastName);