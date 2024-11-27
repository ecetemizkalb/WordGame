//alert("imported")
$(function(){
    var bgcolor = "EFBB60";
    //console.log(bgcolor);
    var wordsarray = ["market","krema","maket","merak","kem"];
    var userword;
    var userarr = [];
    var isselected;
    var flagshuffle = true;
    var flagwordarr= [true,true,true,true,true];  

    $(".container").contextmenu(function(e){
        e.preventDefault(); //stop the default action of right mouse click (it shows a menu otomatically)
        $("#shuffle").on("click",funcShuffle());
    })

    .mousedown(function(e){
        if(e.which === 3){
            userword = userarr.join("").toLowerCase();
            var index = wordsarray.indexOf(userword);
            if(index == -1){
                $("#panel").animate({backgroundColor: "#991919"},100)
                            .animate({backgroundColor: "#3d0303"},100)
                            .animate({backgroundColor: "#991919"},100)
                            .animate({backgroundColor: "#3d0303"},100);
                $(".panel").animate({left: "+=15px"},80)
                            .animate({left: "-=15px"},80)
                            .animate({left: "+=15px"},80)
                            .animate({left: "-=15px"},80);
                            
                $("#panel") .fadeOut(200, function(){
                                $("#panel").text("").fadeIn(200);
                            })           
            }else{
                if(flagwordarr[index]){
                    $("#panel").animate({backgroundColor: "#45f27f"},200)
                                .animate({backgroundColor: "#209146"},100);
                    $(`.word${index} span`).removeClass("unselected");
                    $(`.word${index}`).animate({backgroundColor: "#EFBB60"});
                    flagwordarr[index] = false;
                }else{
                    $(`.word${index} span`).animate({color: "black"},80)
                                            .animate({color: "white"},80)
                                            .animate({color: "black"},80)
                                            .animate({color: "white"},80)
                                            .animate({color: "black"},80)
                                            .animate({color: "white"},80);
                }
                
            }
            
            $("#panel").fadeOut(200, function(){
                $("#panel").text("").fadeIn(100).css("backgroundColor","#efbb6076");
            }) 
            for(let i = 1;i<7;i++){
                $(`#l${i}`).css("background","none");
            }
            userarr = [];
            $("#shuffle").animate({color: "black"}).hover(function(){
                $(this).css({cursor: "pointer",background: "#F2B445",color: "white"});
            },function(){
                $(this).css({background: "none",color: "black"})
            });
        }
    })

    function funcShuffle(){
        $("#shuffle").click(function(){
            var arrletter = ["A","K","M","E","T","R"];
            for(let i = 1;i<7;i++){
                var random = Math.floor(Math.random()*arrletter.length);
                $(`#l${i}`).text(`${arrletter[random]}`)
                arrletter.splice(random,1);
            }
        });
    }

    $("#shuffle").click(funcShuffle());

    $("#hint").click(function(){
        $(this).animate({top: "+=10px"},100)
               .animate({top: "-=10px"},100);

        $(".word .unselected").fadeIn(700).animate({color: "#EFBB60"}).delay(400).fadeOut(700, function(){
            $(".word .unselected").fadeIn(100).css("color","#fff");
        });
    })


    for(let i = 1;i<7;i++){
        $(`#l${i}`).click(function(){
            isselected = userarr.includes($(this).text());
            $("#shuffle").off("click");
            $("#shuffle").animate({color: "#991919"}).hover(function(){
                $(this).css({cursor: "auto",background: "none"});
            },function(){
                $(this).css({color: "#991919"});
            });
            

            if(!isselected){
                userarr.push($(this).text());
                $("#panel").append($(this).text());
                $(this).animate({backgroundColor: "#EFBB60"},100);
            }else{
                $(this).animate({top : "-=10px"},80)
                        .animate({top : "+=10"},80)
                        .animate({top : "-=10px"},80)
                        .animate({top : "+=10"},80)
            } 
        })
    }
    
})