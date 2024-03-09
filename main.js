const{app,BrowserWindow} = require ("electron");

//cria janela 800 por 600
function createWindow(){
    const win = new BrowserWindow(
    {
        width: 800,
        height:600
    }    
        );
    
        win.loadFile("html/index.html");
    }
//cria a janela quando o electron terminou de carregar
app.whenReady().then(createWindow);