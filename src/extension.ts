// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { HelloWorldPanel } from "./HelloWorldPanel";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vstodo" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo.helloWorld", () => {
      HelloWorldPanel.createOrShow(context.extensionUri)
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo.askQuestion", async () => {
	 const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad");
	 
	 if(answer === "bad") {
		vscode.window.showInformationMessage("Sorry to hear that");
	 } else {
		 console.log({answer})
	 }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
