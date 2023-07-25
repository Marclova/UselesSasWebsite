using Microsoft.AspNetCore.SignalR;

namespace UselesSasBackendClient.hubs  //THAT'S ALL WORK IN PROGRESS!!!
{
  public class ChatHub : Hub
  {
    public async Task NewMessage(long username, string message) =>
        await Clients.All.SendAsync("messageReceived", username, message);
  }
}
