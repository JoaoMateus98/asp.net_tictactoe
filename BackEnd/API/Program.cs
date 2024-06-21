using System.Text;
using System.Text.Json;

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

app.MapPost("/test", IResult (Person person) =>
{
    return Results.Ok(person);
});

app.Run();

record Person(string FirstName, string LastName);