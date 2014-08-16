/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
)
|   hackforplayへようこそ、冒険者よ。
|
|   スライムの斬り心地はどうだっ
|   た？...倒せない？...バグってる？
|
|   ...その通り!!よくぞ見抜いたな...。
|   最初は、スライムすら倒せない。それが、
|   このhackforplayの世界なのだ。
|
|   不安か...？怯えるな。心配などいらん。
|   なぜなら冒険者よ、君には
|   未来を書き換える能力があるからだッ!!
|
|   これより下に書かれた文書は、特殊な言葉
|   を用いて書かれた「未来の予言書」なのだ。
|   君には予言を書き換えて、世界を変え、
|   そしてダンジョンを攻略する力が、ある!!
|   準備は出来たか？　未来を、頼んだぞ...
|
|          Let's hackforplay!!
|
|   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
|
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

enchant();
window.onload = function() {
    var game = new Game(160, 160);
    game.fps = 15;
    game.preload('map1.gif', 'chara0.png','monster4.gif', 'chara5.png', 'chara7.png', 'bigmonster1.gif', 'effect0.png', 'icon0.png', 'gameover.png', 'clear.png', 'message_window.png', 'sho.png', 'black.png');

    function beginStage(floor){
        stage = new Group();
        map = new Map(16, 16);
        map.image = game.assets['map1.gif'];
        switch(floor){
            case 1:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ 1
                |   【天地長久のブルースライム】
                |
                |   奴の名はブルースライム(blueSlime)。
                |   いくら攻撃しても倒れない強さの秘訣は、
                |   その体力(hp)にあると言う...。
                |   何とかして、hpを減らすことが出来れば
                |   倒せるかも知れないが...
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                var blueSlime = new BlueSlime(6, 4); // ブルースライム
                blueSlime.hp = 99999999;

                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ...どこを書き換えればいいか、分かった
                |   だろうか。思い切って書き換えるのだ!!
                |
                |   書き換えたら、画面右下の更新ボタンをクリックするのだ!
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                player.locate(2, 2);

                var man = new NPC(1); // 少年
                man.locate(4, 1);

                var stair = new Stair(2); // 階段
                stair.locate(2, 7);

                map.loadData([
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                ],[
                    [ -1, -1, -1, -1, -1,321,321,321,321,321],
                    [ -1, -1, -1, -1, -1,321,321,321,321,321],
                    [ -1, -1, -1, -1, -1,341,321,321,321,321],
                    [ -1, -1, -1, -1, -1, -1,341,341,341,321],
                    [ -1, -1, -1, -1, -1, -1, -1,400,400,321],
                    [321,321,321,321,321,321, -1, -1,400,321],
                    [341,341,341,341,341,341, -1, -1, -1,321],
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1,321],
                    [ -1, -1, -1, -1, -1, -1, -1, -1,400,321],
                    [341,341,341,341,341,341,341,341,341,341],
                ]);
                map.collisionData = [
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1],
                    [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1],
                    [  0,  0,  0,  0,  0,  0,  1,  1,  1,  1],
                    [  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  0,  0,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  0,  0,  0,  1],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                ];

                var temp_hp = blueSlime.hp;
                man.talk = function(){
                    if(blueSlime.hp > 99999990){
                        switch(this.count){
                            case 0: this.message.show("やあ、こんにちは。こんなところで何をしてるの？ (Zキーで次に進む)"); break;
                            case 1: this.message.show("きみ、いいものをもってるね。あのバケモノのこと、やっつけてくれるとうれしいなぁ"); break;
                            case 2: this.message.show("下に行きたいんだけど、あの青いバケモノが、みちをふさいでいるんだ。・・・こまっていたところさ"); break;
                            case 3: this.message.show("くれぐれも、気をつけてね"); break;
                            case 4: this.message.close(); if(blueSlime.hp == 99999999) alert("【ヒント】Xキーで剣を使えます"); break;
                        }
                    }else if(blueSlime.scene !== null){
                        switch(this.count){
                            case 0: this.message.show("・・・・・・。"); break;
                            case 1: this.message.show("やっぱり、ダメなんだ・・・。さっき石をぶつけてみたけど、ぜんぜんうごかなかったもん"); break;
                            case 2: this.message.show("まいったなぁ。きみだけがたよりだったのになぁ・・・"); break;
                            case 3: this.message.show("そうだ、いいものをあげるよ。・・・さっき、そこでひろったんだ"); break;
                            case 4: this.message.show("ほら、これだよ");parent.revealEditor();break;
                            case 5: this.message.show("どうかな。やくにたちそう？"); break;
                            case 6: this.message.show("ぼく？ぼくは、ここで見ているよ。きみみたいに、つよくないからね");  break;
                            case 7: this.message.close(); break;
                        }
                    }else{
                        switch(this.count){
                            case 0: this.message.show("きみってすごいね。たったの"+temp_hp+"発でやっつけちゃうなんて"); break;
                            case 1: this.message.show("これで下に行けるようになったね。じゃあ、ぼくは先に行っているから"); break;
                            case 2: this.damage(0); this.message.show("じゃあね・・・"); break;
                        }
                    }
                }

                player.collideWith = [blueSlime, man];
                stage.addChild(map);
                stage.addChild(stair);
                stage.addChild(blueSlime);
                stage.addChild(man);
                stage.addChild(player);

                break;

            case 2:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ 2
                |   【閉鎖空間のリロケーション】
                |
                |   壁に囲まれて、身動きが取れない...ッ!?
                |   位置(locate)と書かれた部分で、最初
                |   に立つ位置を決めているらしい。
                |   (2, 2)とは、一体どういう意味なのか...
                |   数字を変えれば、ひょっとして...?
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                var blueSlime1 = new BlueSlime(7, 3); // ブルースライム1
                blueSlime1.hp = 99999999;

                var blueSlime2 = new BlueSlime(8, 3); // ブルースライム2
                blueSlime2.hp = 99999999;

                player.locate(2, 2);

                var stair = new Stair(3); // 階段
                stair.locate(5, 8);

                var sapphire = new Jewel(65); // サファイア
                sapphire.locate(1, 8);


                var man = new NPC(19); // 少年
                man.locate(0, 7);

                map.loadData([
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                    [342,342,342,342,342,342,342,342,342,342],
                ],[
                    [321,341,341,321,341,341,341,341,341,321],
                    [321, -1, -1,321, -1, -1, -1, -1, -1,321],
                    [321,400, -1,321, -1, -1, -1, -1, -1,321],
                    [321,400, -1,321, -1, -1, -1, -1, -1,321],
                    [321,321,321,321,321,321,321, -1,321,321],
                    [321,321,321,321,321,321,321, -1,321,321],
                    [321,341,341,321,321,341,341, -1,321,321],
                    [321, -1, -1,321,321, -1, -1, -1,321,321],
                    [321, -1, -1,321,321, -1, -1, -1,321,321],
                    [321,321,321,321,321,321,321,321,321,321],
                ]);
                map.collisionData = [
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  1],
                    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  1],
                    [  1,  1,  0,  1,  0,  0,  0,  0,  0,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
                    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  1],
                    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                ];

                man.talk = function(){
                    switch(this.count){
                        case 0: this.message.show("・・・・・・。"); break;
                        case 1: this.message.show("どうかした？ぼくのかお、なにかついてる？"); break;
                        case 2: this.message.close(); break;
                    }
                }

                player.collideWith = [blueSlime1, blueSlime2, man];
                stage.addChild(map);
                stage.addChild(stair);
                stage.addChild(blueSlime1);
                stage.addChild(blueSlime2);
                stage.addChild(sapphire);
                stage.addChild(man);
                stage.addChild(player);
                break;

            case 3:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ 3
                |   【火炎吐息のトゥルーオアフォルス】
                |
                |   巨大なドラゴン(dragon)の炎(fire)で、
                |   進むことが出来なくなってしまった!!
                |   なんとかして、炎を止めたいのだが...
                |   trueとは、「真」を意味する言葉だ。
                |   それとは逆の「偽」を意味する言葉もある。
                |   その言葉に書き換える事が出来れば、炎を
                |   止められるかも知れない...どんな方法を
                |   使ってもいい。「偽」を調べるしかない!!
                |
                |https://www.google.co.jp/webhp?q=trueの反対
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


                var dragon = new Dragon(); // ドラゴン
                dragon.fire = true;

                player.locate(2, 2);

                var stair = new Stair(4); // 階段
                stair.locate(8, 8);

                var ruby = new Jewel(66); // ルビー
                ruby.locate(5, 5);

                var man = new NPC(1); // 少年
                man.locate(3, 1);

                map.loadData([
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                    [323,323,323,323,323,323,323,323,323,323],
                ],[
                    [340,340,340,340,340,340,340,340,340,340],
                    [ 36, -1, -1, -1, 34, 35, 35, 35, 35, 35],
                    [ 56, -1, -1, -1, 54, 55, 55, 55, 55, 55],
                    [ 56, -1, -1, -1, 54, 55, 55, 55, 55, 55],
                    [ 56, -1, -1, -1, 74, 75, 17, 55, 55, 55],
                    [ 56, -1, -1, -1, -1, -1, 54, 55, 55, 55],
                    [ 56, -1, -1, -1, 10, 11, 77, 75, 17, 55],
                    [ 56, -1, -1, -1, -1, -1, -1, -1, 74, 75],
                    [ 14, 36, -1, -1, -1, -1, -1, -1, -1, -1],
                    [ 55, 14, 35, 35, 35, 35, 35, 35, 35, 35],
                ]);
                map.collisionData = [
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  1],
                    [  1,  1,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                ];

                man.talk = function(){
                    switch(this.count){
                        case 0: this.message.show("こんなに大きなバケモノまでいるなんて！ここってほんとう、おそろしい所だよね"); break;
                        case 1: this.message.show("うっ、ここまで、ねっきが・・・。たのむから、せなかを押したりしないでおくれよ・・・。"); break;
                        case 2: this.message.close();
                    }
                }


                stage.addChild(map);
                stage.addChild(stair);
                if(dragon.fire) {
                    stage.addChild(ruby);
                    stage.addChild(man);
                    player.collideWith = [man];
                }
                eventFlag = !dragon.fire;
                stage.addChild(dragon);
                stage.addChild(player);
                break;

            case 4:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ 4
                |   【死屍累々のメイズ】
                |
                |   骸骨(skull)に触れればもはや命はない。
                |   迷路を彷徨う骸骨...奴に触れずに迷路を
                |   攻略するには、どうすればいいのだ...!?
                |
                |   onenterframeという部分で、奴は動いて
                |   いるらしいが、それを上手く利用出来ない
                |   だろうか...
                |
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                player.locate(1, 1);

                var skulls = [];
                for (var i = 0; i < 10; i++) {
                    skulls[i] = new Skull();
                    player.collideWith.push(skulls[i]);
                    skulls[i].follow = i == 0 ? player : skulls[i-1];
                    skulls[i].moveTo(128+i*10, 128+i*10);

                    skulls[i].onenterframe = function(){

                        var followX = this.follow.x - this.x;
                        var followY = this.follow.y - this.y;
                        var absolute = Math.sqrt(followX * followX + followY * followY);
                        if(absolute > 0){
                            this.moveBy(followX / absolute, followY / absolute);
                        }

                        if(this.intersect(player)){
                            player.damage(1);
                        }
                    }
                }


                var stair = new Stair(5); // 階段
                stair.locate(8, 8);

                var diamond = new Jewel(64); // ダイヤモンド
                diamond.locate(8, 6);

                map.loadData([
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                ],[
                    [420,420,420,420,420,420,420,420,420,420],
                    [420, -1,420,420,420,420,420,420,420,420],
                    [420, -1,420, -1, -1, -1,420,420,420,420],
                    [420, -1,420, -1,420, -1,420,420,420,420],
                    [420, -1,420, -1,420, -1,420,420,420,420],
                    [420, -1, -1, -1,420, -1,420,420,420,420],
                    [420,420,420,420, -1, -1,420,420,420,420],
                    [420,420,420,420, -1,420, -1, -1, -1,420],
                    [420,420,420,420, -1, -1, -1,420, -1,420],
                    [420,420,420,420,420,420,420,420,420,420],
                ]);
                map.collisionData = [
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  1,  0,  1,  0,  0,  0,  1,  1,  1,  1],
                    [  1,  0,  1,  0,  1,  0,  1,  1,  1,  1],
                    [  1,  0,  1,  0,  1,  0,  1,  1,  1,  1],
                    [  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
                    [  1,  1,  1,  1,  0,  0,  1,  1,  0,  1],
                    [  1,  1,  1,  1,  0,  1,  0,  0,  0,  1],
                    [  1,  1,  1,  1,  0,  0,  0,  1,  0,  1],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                ];

                stage.addChild(diamond);
                stage.addChild(map);
                stage.addChild(stair);
                skulls.forEach(function(value){stage.addChild(value);});
                stage.addChild(player);
                break;

            case 5:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ 5
                |   【因果応報のインヘリタンス】
                |
                |   自分(player)と戦っているのは...
                |   ...まさか、自分自身...!!?
                |
                |   自分が強くなればなるほど、
                |   悪しき者(ashiki_mono)に力を与えて
                |   しまうというのなら...果たして、勝つ
                |   未来を創り出すことは出来るのか！？
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                player.locate(1, 4);
                player.hp = 1000;
                player.atk = 100;

                var Ashiki_kokoro = enchant.Class.create(Player, {
                    initialize : function(){
                        Player.call(this);
                        this.control = false;
                        var image = new Surface(288, 128);
                        image.draw(game.assets['chara7.png'], 0, 0, 288, 128, 0, 0, 288, 128);
                        this.image = image;
                        this.hp = player.hp * 2;
                        this.atk = player.atk * 2;
                    }
                });

                var ashiki_mono = new Ashiki_kokoro(); // 悪しき者
                ashiki_mono.locate(8, 4);

                map.loadData([
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                    [ 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
                ],[
                    [110,111,111, 93, 93, 93, 93,111,111,112],
                    [130,131, 93,131,131,131,131, 93,131,132],
                    [130, 93,131,131,131,131,131,131, 93,132],
                    [ 93,131,131,131,131,131,131,131,131, 93],
                    [ 93,131,131,131,131,131,131,131,131, 93],
                    [ 93,131,131,131,131,131,131,131,131, 93],
                    [130, 93,131,131,131,131,131,131, 93,132],
                    [130,131, 93,131,131,131,131, 93,131,132],
                    [130,131,131, 93, 93, 93, 93,131,131,132],
                    [150,151,151,151,151,151,151,151,151,152],
                ]);
                map.collisionData = [
                    [  0,  0,  0,  1,  1,  1,  1,  0,  0,  0],
                    [  0,  0,  1,  0,  0,  0,  0,  1,  0,  0],
                    [  0,  1,  0,  0,  0,  0,  0,  0,  1,  0],
                    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                    [  0,  1,  0,  0,  0,  0,  0,  0,  1,  0],
                    [  0,  0,  1,  0,  0,  0,  0,  1,  0,  0],
                    [  0,  0,  0,  1,  1,  1,  1,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                ];

                ashiki_mono.collideWith = [player];
                player.collideWith = [ashiki_mono];

                stage.addChild(map);
                stage.addChild(player);
                stage.addChild(ashiki_mono);
                break;
            case 6:
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   ステージ ６
                |   【機械演算のパラドックス】
                |
                |   ルビーとスター。二つの間には、片方を
                |   得るために片方を捨てなければならない
                |   という制約が存在する。
                |
                |   プログラミングで、世界の法則に抗え。
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

                player.locate(1, 1);

                var man = new NPC(10); // 少年
                man.locate(4, 3);

                var stair = new Stair(7); // 階段
                stair.locate(6, 4);

                var image = new Surface(16, 16);
                image.draw(game.assets['map1.gif'], 32, 320, 16, 16, 0, 0, 16, 16);
                stair.image = image;

                map.loadData([
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                ],[
                    [340,340,340,340,340,340,340,340,340,206],
                    [340,421,421, -1, -1, -1, -1, -1, -1,206],
                    [340,340,340,340,340,340,340, -1, -1,206],
                    [ -1,421, 23,421,421,421,421,401, -1,206],
                    [ -1,421, 43,421, -1, -1, -1,401, -1,206],
                    [340,340, 43,340,340,340,340,340,421,206],
                    [184,186, 64,  1, 25, 25, 26,421,421,206],
                    [204,164,185,186, 44, 45, 45, 26,421,206],
                    [224,225,225,206, 64, 65, 65, 66, -1,206],
                    [224,225,225,225,225,225,225,225,225,226],
                ]);
                map.collisionData = [
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                ];

                man.talk = function(){
                    if(eventFlag){
                        switch(this.count){
                            case 0: this.message.show("・・・・・・。"); break;
                            case 1: this.message.show("じつは・・・きみに、あやまらなくっちゃいけないことがあるんだ"); break;
                            case 2: this.message.show("さっき、ドラゴンのすみかにルビーがおちていたんだけど"); break;
                            case 3: this.message.show("ひろおうとして・・・まちがって、穴におとしちゃったんだ"); break;
                            case 4: this.message.show("そのかわりに、これをあげるよ。くろい男の人が、おとしていったんだ"); break;
                            case 5: var star = new Jewel(30); star.pickup();
                             this.message.show("じゃあ、そろそろ行こうか。"); break;
                            case 6: this.message.close(); break;
                        }
                    }else{
                        switch(this.count){
                            case 0: this.message.show("やあ、また会ったね。"); break;
                            case 1: this.message.show("さっき、いいものをひろったよ。フフ、もってかえったら、みんなの人気者になれるかなぁ"); break;
                            case 2: this.message.show("きみも、なにかひろえたかい？ここにはきれいなものがいっぱいおちているみたいだよ"); break;
                            case 3: this.message.show("じゃあ、そろそろ行こうか。"); break;
                            case 4: this.message.close();
                        }
                    }
                }

                player.collideWith = [man];
                stage.addChild(map);
                stage.addChild(man);
                stage.addChild(stair);
                stage.addChild(player);
                break;
            case 7:
                var clear = new Sprite(267, 48);
                clear.image = game.assets['clear.png'];
                clear.scale(0.6, 0.6);
                clear.moveTo(-54, 54);
                clear.opacity = 0;

                clear.onenterframe = function(){
                    clear.opacity += 0.05;
                    if(clear.opacity > 1){
                        clear.opacity = 1;
                    }else{
                        clear.y -= 1;
                    }
                }

                var score = new Label("");
                var scoreText = "ホウセキ：  " + (player.jewels.length * 25) + "％";
                score.font = "bold 14px sans-serif";
                score.moveTo(20, 100);
                score.color = "#ffffff";

                var tick = 0;
                score.onenterframe = function(){
                    if(clear.opacity >= 1 && ((tick++) % 4 == 0)){
                        if(score.text.length < scoreText.length){
                            score.text = scoreText.slice(0, score.text.length + 1);
                        }
                    }
                }

                stage.addChild(clear);
                stage.addChild(score);
                break;

            default :
                /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
                )
                |   【冒険の始まり】
                |
                \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
                map.loadData([
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                    [322,322,322,322,322,322,322,322,322,322],
                ],[
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [ -1,461,462, -1,461,462, -1,461,462,421],
                    [ -1,481,482, -1,481,482,421,481,482,421],
                    [ -1,421,421,421,421,421,421,421,421, -1],
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [ -1,461,462, -1,461,462, -1,461,462, -1],
                    [ -1,481,482, -1,481,482, -1,481,482, -1],
                    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                ]);
                map.collisionData = [
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                ];

                player.locate(2, 5);

                var stair = new Stair(1);
                stair.locate(7, 5);

                stage.addChild(map);
                stage.addChild(stair);
                stage.addChild(player);
                break;
        }

        game.rootScene.addChild(stage);
        showAchievements();

    }


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
    )
    |   エクストラステージ
    |   【世界創造のエンチャント】
    |
    |   ここまでのステージを全てクリアしたなら、
    |   読んでみるといい。書き換えてみるといい。
    |   そうすれば、この世界の驚くべき自由度と、
    |   無限大の可能性を感じられるだろう...。
    |
    |   この世界に魅了(enchant)され、更なる
    |   高みを目指したいと思ったならば...
    |   #hackforplay で、ハックし続けるのだ!!
    |
    \*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // 重要な変数
    var player, stage, map, stair, eventFlag, achievements;

    // ゲームが最初に始まるとき
    game.onload = function() {

        game.keybind("X".charCodeAt(0), 'a');
        game.keybind("Z".charCodeAt(0), 'b');
        player = new Player();

        beginStage(0);
    };

    // 状態の定義
    var BehaviorTypes = {
        Idle : 0,       // 立ち状態
        Walk : 1,       // 歩き状態
        Attack : 2,     // 攻撃状態
        Damaged : 3,    // 被撃状態
        Dead : 4        // 死亡状態
    };

    // プレイヤー
    var Player = enchant.Class.create(enchant.Sprite, {
        initialize : function(){
            enchant.Sprite.call(this, 32, 32);
            var image = new Surface(288, 128);
            image.draw(game.assets['chara5.png'], 0, 0, 288, 128, 0, 0, 288, 128);
            this.image = image;
            this.x = 8;
            this.y = 0;
            this.atk = 1;
            this.hp = 1;
            this.walkable = true;

            this.behavior = BehaviorTypes.Idle;
            this.direction = 0;
            this.animCount = 1;
            this.damageFlag = false;
            this.jewels = [];

            this.collideWith = [];
            this.control = true;
        },
        onenterframe : function(){
            var input = { x:0, y:0, d:this.direction };
            if (game.input.up) {
                input.d = this.control ? 3 : 0;
                input.y = this.control ?-1 : 1;
            } else if (game.input.down) {
                input.d = this.control ? 0 : 3;
                input.y = this.control ? 1 :-1;
            } else if (game.input.left) {
                input.d = this.control ? 1 : 2;
                input.x = this.control ? -1: 1;
            } else if (game.input.right) {
                input.d = this.control ? 2 : 1;
                input.x = this.control ? 1 :-1;
            }
            this.animCount ++;
            switch(this.behavior){
                case BehaviorTypes.Idle:
                    this.frame = this.direction * 9 + 1;
                    this.animCount = 0;
                    // 攻撃
                    if(game.input.a){
                        this.behavior = BehaviorTypes.Attack;
                        var chara = this;
                        this.tl.delay(2).then(function(){
                            var _x = this.x + (this.direction == 1 ? -16 : (this.direction == 2 ? 16 : 0));
                            var _y = this.y + (this.direction == 3 ? -16 : (this.direction == 0 ? 16 : 0));
                            var enemies = this.findEnemies(_x + 16, _y + 24);
                            enemies.forEach(function(enemy){
                                enemy.damage(chara.atk);
                            });
                        });
                    }else if(this.walkable){
                        // 移動
                        this.direction = input.d;
                        if (input.x || input.y) {
                            var _x = this.x + input.x * 16;
                            var _y = this.y + input.y * 16;
                            var enemies = this.findEnemies(_x + 16, _y + 24);

                            if (-8 <= _x && _x < map.width && -16 <= _y && _y < map.height &&
                                !map.hitTest(_x + 16, _y + 16) && enemies.length < 1) {
                                    this.behavior = BehaviorTypes.Walk;
                                    this.tl.moveTo(_x, _y, 4).then(function(){
                                    this.animCount = 0;
                                    this.behavior = BehaviorTypes.Idle;
                                });
                            }
                        }
                    }
                    break;

                case BehaviorTypes.Walk:
                    this.frame = this.direction * 9 + (this.animCount % 3);
                    break;

                case BehaviorTypes.Attack:
                    this.frame = this.direction * 9 + (this.animCount / 2 % 3) + 6;
                    if(this.animCount > 5){
                        this.anim = 1;
                        this.behavior = BehaviorTypes.Idle;
                    }
                    break;

                case BehaviorTypes.Dead:
                    this.frame = 1;
                    if(this.animCount < 10){
                        this.opacity = (10 - this.animCount) / 10.0;
                    }else if(this === player){
                        var gameOver = new Sprite(189, 97);
                        gameOver.image = game.assets['gameover.png'];
                        gameOver.scale(0.8, 0.8);
                        gameOver.moveTo(-15, 32);
                        this.scene.addChild(gameOver);
                        stage.removeChild(this);
                    }else{
                        var stair = new Stair(6);
                        stair.moveTo(this.x + 8, this.y + 16);
                        stage.insertBefore(stair, player);
                        stage.removeChild(this);
                        player.avoid(this);
                    }
                    break;
            }
            // ダメージを受けたときの点滅
            if(this.damageFlag){
                this.opacity = this.opacity == 0 ? 1 : 0;
            }
        },
        damage : function(atk){
            if( this.behavior != BehaviorTypes.Damaged &&
                this.behavior != BehaviorTypes.Dead){
                this.hp -= atk;
                if(this.hp > 0){
                    this.damageFlag = true;
                    this.tl.delay(4).then(function(){
                        this.opacity = 1;
                        this.damageFlag = false;
                    });
                }else{
                    this.behavior = BehaviorTypes.Dead;
                }
                this.animCount = 0;
            }
        },
        avoid : function(enemy){
            var chara = this;
            this.collideWith.some(function(v, i){
                if(enemy == v){
                    chara.collideWith.splice(i, 1);
                }
            });
        },
        locate : function(x, y){
            this.x = x * 16 - 8;
            this.y = y * 16 - 16;
        },
        findEnemies : function(x, y){
            var out = [];
            this.collideWith.forEach(function(item){
                if(item.x < x && x < item.x + item.width &&
                    item.y < y && y < item.y + item.height){
                    out[out.length] = item;
                }
            });
            return out;
        }
    });

    // ブルースライム
    var BlueSlime = enchant.Class.create(enchant.Sprite, {
        initialize : function(x, y){
            enchant.Sprite.call(this, 16, 16);
            var image = new Surface(192, 96);
            image.draw(game.assets['monster4.gif'], 0, 0, 192, 96, 0, 0, 64, 32);
            this.image = image;
            this.frame = 2;
            this.x = 16 * x;
            this.y = 16 * y;
            this.hp = 1;
            this.animCount = 0;
            this.behavior = BehaviorTypes.Idle;
        },
        damage : function(atk){
            if( this.behavior != BehaviorTypes.Damaged &&
                this.behavior != BehaviorTypes.Dead){
                this.hp -= atk;
                if(this.hp > 0){
                    this.behavior = BehaviorTypes.Damaged;
                    this.tl.delay(3).then(function(){
                        this.behavior = BehaviorTypes.Idle;
                    });
                }else{
                    this.behavior = BehaviorTypes.Dead;
                }
            }
        },
        onenterframe : function(){
            this.animCount++;
            switch(this.behavior){
                case BehaviorTypes.Idle:
                    this.frame = 2 + (this.animCount / 3) % 2;
                    break;
                case BehaviorTypes.Damaged:
                    this.frame = 2 + this.animCount + (this.animCount > 1 ? 8 : 0);
                    if(this.animCount > 3){
                        this.behavior = BehaviorTypes.Idle;
                    }
                    break;
                case BehaviorTypes.Dead:
                    this.frame = 2 + this.animCount + (this.animCount == 4 ? 9 : (this.animCount > 1 ? 8 : 0));
                    if(this.animCount > 4){
                        stage.removeChild(this);
                        player.avoid(this);
                    }
                    break;
            }
        }
    });

    // ドラゴン
    var Dragon = enchant.Class.create(enchant.Sprite, {
        initialize : function(){
            enchant.Sprite.call(this, 80, 80);
            var image = new Surface(320, 240);
            image.draw(game.assets['bigmonster1.gif'], 0, 0, 320, 240, 0, 0, 320, 240);
            this.image = image;
            this.frame = 0;
            this.x = 16 * 7 - 32;
            this.y = 16 * 6 - 64;
            this.animCount = 0;
            this.behavior = BehaviorTypes.Idle;
            this.fire = true;
        },
        onenterframe : function(){
            this.animCount++;
            switch(this.behavior){
                case BehaviorTypes.Idle:
                    if(this.animCount > 4){
                        this.animCount = 4;
                        this.behavior = BehaviorTypes.Attack;
                    }
                    this.frame = this.animCount;
                    break;

                case BehaviorTypes.Attack:
                    if(this.fire){
                        var emit = new Fire(
                            this.x +  4 + Math.random() * 4,
                            this.y + 22 + Math.random() * 4,
                            -5 - Math.random() * 4,
                            1 + Math.random() * 6);
                        stage.addChild(emit);
                    }
                    if(this.animCount > 7){
                        this.animCount = 7;
                    }
                    this.frame = 3 + this.animCount;
                    break;
            }
        }
    });

    // ドラゴンが吐く炎
    var Fire = enchant.Class.create(enchant.Sprite, {
        initialize : function(x, y, vx, vy){
            enchant.Sprite.call(this, 16, 16);
            this.moveTo(x, y);
            this.vx = vx;
            this.vy = vy;
            this.rotate(Math.random() * 360);
            this.scale(0.5, 0.5);
            var image = new Surface(80, 16);
            image.draw(game.assets['effect0.png'], 0, 0, 80, 16, 0, 0, 80, 16);
            this.image = image;
            this.animCount = 0;
        },
        onenterframe : function(){
            this.animCount++;
            if(this.animCount > 14){
                stage.removeChild(this);
            }else{
                this.frame = this.animCount / 3;
                this.intersect(enchant.Sprite).forEach(function(value){
                    if(value.damage){
                        value.damage(9999);
                    }
                });
            }
            this.moveBy(this.vx, this.vy);
            this.scaleX = 1 + this.animCount / 5;
            this.scaleY = 1 + this.animCount / 5;
            this.opacity = (15 - this.animCount) / 15.0;
        }
    });

    // 骸骨
    var Skull = enchant.Class.create(enchant.Sprite, {
        initialize : function(){
            enchant.Sprite.call(this, 16, 16);
            var image = new Surface(16, 16);
            image.draw(game.assets['icon0.png'], 11 * 16, 0, 16, 16, 0, 0, 16, 16);
            this.image = image;
            this.count = 0;
            this.reverse = false;
            this.behavior = BehaviorTypes.Idle;
            this.hp = 1;
        },
        damage : function(atk){
            this.hp -= 0;
            if(this.hp <= 0){
                stage.removeChild(this);
                player.avoid(this);
            }
        },
    });

    // 地下に続く階段
    var Stair = enchant.Class.create(enchant.Sprite, {
        initialize : function(floor){
            enchant.Sprite.call(this, 16, 16);
            var image = new Surface(16, 16);
            image.draw(game.assets['map1.gif'], 32, 336, 16, 16, 0, 0, 16, 16);
            this.image = image;
            this.floor = floor;
        },
        onenterframe : function(){
            if(player.x + 8 == this.x && player.y + 16 == this.y) {
                var black = new Sprite(160, 160);
                black.image = game.assets['black.png'];
                black.opacity = 0;
                player.walkable = false;
                this.onenterframe = function(){
                    black.opacity += 0.08;
                    if(black.opacity >= 1){
                        this.scene.removeChild(stage);
                        beginStage(this.floor);
                        player.walkable = true;
                    }
                }
                stage.addChild(black);
            }
        },
        locate : function(x, y){
            this.x = x * 16;
            this.y = y * 16;
        }
    });

    // 宝石
    var Jewel = enchant.Class.create(enchant.Sprite, {
        initialize : function(id){
            enchant.Sprite.call(this, 16, 16);
            var image = new Surface(16, 16);
            image.draw(game.assets['icon0.png'], (id % 16) * 16, parseInt(id / 16) * 16, 16, 16, 0, 0, 16, 16);
            this.image = image;
            this.id = id;
        },
        onenterframe : function(){
            if(player.x + 8 == this.x && player.y + 16 == this.y){
                this.pickup();
                stage.removeChild(this);
            }
        },
        locate : function(x, y){
            this.moveTo(16*x, 16*y);
        },
        pickup : function(){
            if(player.jewels.indexOf(this.id) == -1){
                player.jewels.push(this.id);
            }
            showAchievements();
        }
    });

    // NPC
    var NPC = enchant.Class.create(enchant.Sprite, {
        initialize : function(id){
            enchant.Sprite.call(this, 32, 32);
            var image = new Surface(32, 32);
            image.draw(game.assets['chara0.png'], (id % 9) * 32, parseInt(id / 9) * 32, 32, 32, 0, 0, 32, 32);
            this.image = image;
            this.isTalking = false;
            this.message = null;
            this.keyEnable = true;
            this.windowEnable = true;
        },
        locate : function(x, y){
            this.x = x * 16 - 8;
            this.y = y * 16 - 16;
        },
        onenterframe : function(){
            if(this.isTalking){
                if(this.isTalkable() == false){
                    if(this.message.scene !== null)
                        this.message.close();
                    this.isTalking = false;
                }else if(game.input.b){
                    if(this.keyEnable){
                        if(this.message.label.opacity < 1) this.message.label.opacity = 1;
                        else { this.count ++; this.talk(); }
                        this.keyEnable = false;
                    }
                }else{
                    this.keyEnable = true;
                }
            }else if(this.isTalkable()){
                this.isTalking = true;
                this.count = 0;
                if(this.message === null) this.message = new MessageWindow();
                this.scene.addChild(this.message);
                this.scene.addChild(this.message.label);
                this.talk();
            }
        },
        isTalkable : function(){
            // プレイヤーが上にいるとき, 右にいるとき, 左にいるとき, 下にいるとき
            return  (player.x == this.x && player.y == this.y - 16 && player.direction == 0) ||
                    (player.x == this.x + 16 && player.y == this.y && player.direction == 1) ||
                    (player.x == this.x - 16 && player.y == this.y && player.direction == 2) ||
                    (player.x == this.x && player.y == this.y + 16 && player.direction == 3);
        },
        damage : function(atk){
            if(this.message === null){
                this.isTalking = true;
                this.count = 0;
                this.message = new MessageWindow();
                this.scene.addChild(this.message);
                this.scene.addChild(this.message.label);
            }
            this.message.show("うっ・・・");
            this.onenterframe = function(){
                this.opacity -= 0.05;
                this.message.opacity = this.message.label.opacity = this.opacity;
                if(this.message.opacity <= 0){
                    this.message.close();
                    stage.removeChild(this);
                    player.avoid(this);
                }
            }
        },
        talk : function(){}
    });
    // 会話（メッセージ）をするウィンドウ
    var MessageWindow = enchant.Class.create(enchant.Sprite, {
        initialize : function(){
            enchant.Sprite.call(this, 160, 48);
            this.image = game.assets['message_window.png'];
            this.moveTo(0, 112);
            this.label = new Label();

            this.label.font = "bold 7px sans-serif";
            this.label.width = 152;
            this.label.moveTo(4, 116);
        },
        show : function(text){
            this.label.text = text;
        },
        close : function(){
            if(this != null && this.label != null){
                this.scene.removeChild(this.label);
                this.scene.removeChild(this);
            }
        }
    });

    function showAchievements(){
        if(achievements === undefined){
            achievements = new Group();
        }else{
            var children = achievements.childNodes;
            children.forEach(function(child){
                achievements.removeChild(child);
            });
            game.rootScene.removeChild(achievements);
        }
        game.rootScene.addChild(achievements);

        player.jewels.forEach(function(id, index){
            var icon = new Sprite(16, 16);
            icon.moveTo(index * 16, 0);
            var image = new Surface(16, 16);icon
            image.draw(game.assets['icon0.png'], (id % 16) * 16, parseInt(id / 16) * 16, 16, 16, 0, 0, 16, 16);
            icon.image = image;
            icon.opacity = 0.5;
            achievements.addChild(icon);
        });
    }

    // 別のウィンドウを開く画像
    function createPopup(url){
        var image = document.createElement('img');
        image.src = "sho.png";
        image.width = image.height = game.scale * 64;
        image.style.position = 'absolute';
        image.style.left = game.scale * 48 + "px";
        image.style.top = game.scale * 64 + "px";
        image.style.zIndex = 1;
        image.style.opacity = 0;
        var time = +new Date();
        function fadeIn(_image, _time){
            window.setTimeout(function(){
                var spend = (new Date() - _time) / 1000;
                if(spend < 1.0){
                    _image.style.opacity = spend;
                    _image.style.top = game.scale * (64 - 16 * spend) + "px";
                    fadeIn(_image, _time);
                }else{
                    _image.style.opacity = 1;
                    _image.style.top = game.scale * 48 + "px";
                }
            }, 100);
        }
        fadeIn(image, +new Date());
        image.addEventListener('click', function(e){
            window.open(url, 'howtoplay');
            document.body.removeChild(this);
        });

        document.body.appendChild(image);
    }

    // 予言書は書き終えた。ゲームスタート!!
    game.start();
}

/*

(c) 寺本大輝 Teramoto Daiki

hackforplayは、株式会社ユビキタスエンターテイメント様のゲームエンジンenchant.jsを用いて、寺本大輝が作成したプログラミング教育のためのオープンソースソフトウェアです。
enchant.jsは、ユビキタスエンターテイメント社が定めるMITライセンスが適用されます。LICENSE.txtをご覧ください。
また、このソースコード(main.js)も、MITライセンスでリリースしています。著作権表示を消さない限り、「ソースコードの改変」「再配布」を自由にしていただくことが可能です。
事前の連絡は必要ありません。SNSなどでシェアされる場合は、#hackforplayをつけて頂くと良いかと思われます。
ただし、enchant.jsを商用利用・法人利用される場合は、ユビキタスエンターテイメント社にご連絡下さい。enchant.js公式HPよりお問い合わせください。

寺本大輝Email: i101323@gmail.com
寺本大輝Twitter: @teramotodaiki
寺本大輝Facebook: https://www.facebook.com/Sougouch.Teramoto
enchant.js公式HP: http://enchantjs.com/ja/resource-ja/license/

version 0.1 2014/7

*/
