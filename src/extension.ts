import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.debug", () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.restart", () => {
      vscode.commands.executeCommand("workbench.action.debug.restart");
    })
  );
}

export function deactivate() {}
