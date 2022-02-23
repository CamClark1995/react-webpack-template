# Getting Started
Ctrl-Shift-f "react-webpack-template" and replace with your app name  

Run 'npm install' and then 'npm outdated' to check for any outdated packages  

Note: Updating css-loader from version 5 to 6 caused font to load improperly, staying at 5 for now  


# Updating theme
To add a new font, download the necessary woff/woff2 files into src/assets/fonts  

https://google-webfonts-helper.herokuapp.com/fonts/aclonica?subsets=latin  

Ctrl-Shift-f "Mulish" and replace with your new font  

To update colors simply change the hex color in src/theme.config.js  


# Usage
To get this to run with a dotnet backend, must include the following in startup.cs  

```c#
app.UseStaticFiles();
app.Run(async (context) =>
{
	context.Response.ContentType = "text/html";
	await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
});
```

## Development

> npm run dev-webpack  

Running this command will output an index.html and main.js file to your api project wwwroot folder  

Once you see these files have been created, hit f5 to run your api project and you should see your page  
