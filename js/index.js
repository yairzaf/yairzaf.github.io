
/** console animation in header */
function console_anim(str)
{
    var del_for=300;
    var del_bak=100;
    for(var i=0;i<=str.length;i++)
    {
        anim(i,i*del_for,str);
    }
    setTimeout(function()
    {
        for(var i=str.length+1;i>=0;i--)
        {
            anim(i,(str.length-i)*del_bak,str);
        }
    },str.length*del_for+3000);
    var delay = (3000+str.length*del_for+str.length*del_bak);

    return delay;
}
function calc_delay(str)
{
    var del_for=300;
    var del_bak=100;
    var delay = (3000+str.length*del_for+str.length*del_bak);
    return delay;
}
var con_head=$("#anim-header");
function anim(i,del,str)
{
    
        setTimeout(function( ){con_head.text(">"+str.slice(0,i));},del);
       
}

var welcome = ["Welcome. . .","sudo ./jobmarket | grep \"junior\"","Maybe you need a game developer?","You can always mail me.","Have you seen my projects?","enjoy your stay. . .             "];
var quotes =["still here?             ","here are some quotes.",'“Tell me and I forget.  Teach me and I remember.  Involve me and I learn.”','“A computer once beat me at chess, but it was no match for me at kick boxing.”','“I do not fear computers. I fear lack of them.”','“What i cannot create, i do not understand.”'];
var timeout=0;
for(var i=0;i<welcome.length;i++)
{
    setTimeout(console_anim,timeout,welcome[i]);
    timeout+=calc_delay(welcome[i])+100;
}
/*for(var i=0;i<quotes.length;i++)
{
    setTimeout(console_anim,timeout,quotes[i]);
    timeout+=calc_delay(quotes[i]);
}*/

var blinker = $("#blinker");
setInterval(function(){blinker.fadeOut(600).fadeIn(600)},1400);

/** ================================================================================= */
/**dynamic background */


var can=$("#bganima")
var canvas = $("#bganima")[0];



function update_res()
{
    var width=$(window).width();
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return [height,width];
}
var res=update_res();
canvas.height=res[0];
canvas.width=res[1];

/*
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,3,3);
setTimeout(()=>{ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)},2000);
function flake(x,y)
{
    this.pos=[x,y];
    this.color="#0f110f";
    this.size=5;
    this.inter=0;
};
//var flakes=[];
var x=0;
setInterval(function()
{
    var res=update_res();
    var width=res[1];
    //var ctx=canvas.getContext("2d");
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if(x>width)
    {
        return;
    }
    var tmp=new flake(x,0);
    x+=25
    var inter=setInterval(function(){flake_move(tmp,canvas)},200);
    tmp.inter=inter;
    //flakes.push(tmp);
}
,100);

function flake_move(flk,can)
{   
    var res=update_res();
    var height=res[0];
    var width=res[1];

    if(flk.pos[1]>height||flk.pos[0]>width)
    {
        //console.log("killed ",flk.inter);
        clearInterval(flk.inter);
        delete flk;
        
        return;
    }
    
    var ctx=can.getContext("2d");
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.fillStyle=flk.color;
    //ctx.fillRect(flk.pos[0],flk.pos[1],flk.size,flk.size);
    if(width>500)
    {
        ctx.font = "20px Arial";
    }
    else
    {
        ctx.font="10px Arial";
    }
    var num=Math.random()*6>3 ? Math.floor(Math.random()*89)+12449 : Math.floor(Math.random()*10)+12693 ;
    //var chr=String("\u{"+num.toString(16)+"}");
    ctx.fillText(String.fromCharCode(num), flk.pos[0], flk.pos[1]); 
    
    flk.pos[1]+=20;
    //flk.pos[0]+=Math.sin(flk.pos[1])*4;
    
}


*/