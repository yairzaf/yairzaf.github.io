
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
