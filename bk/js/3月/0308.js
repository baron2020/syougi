﻿//駒のId(先手,後手)(len40)
var pieceId=["OU1","HI1","KA1","KI1","KI2","GI1","GI2","KE1","KE2","KY1","KY2","FU1","FU2","FU3","FU4","FU5","FU6","FU7","FU8","FU9",
			 "OU2","HI2","KA2","KI3","KI4","GI3","GI4","KE3","KE4","KY3","KY4","FU10","FU11","FU12","FU13","FU14","FU15","FU16","FU17","FU18"];
//成ることが可能な駒のId(先手,後手)(len34)
var possiblePromotion=["HI1","KA1","GI1","GI2","KE1","KE2","KY1","KY2","FU1","FU2","FU3","FU4","FU5","FU6","FU7","FU8","FU9",
					   "HI2","KA2","GI3","GI4","KE3","KE4","KY3","KY4","FU10","FU11","FU12","FU13","FU14","FU15","FU16","FU17","FU18"];
//駒の配列(先手,後手)(len40)
var piece=["<p id='OU1'>王</p>","<p id='HI1'>飛</p>","<p id='KA1'>角</p>",
			"<p id='KI1'>金</p>","<p id='KI2'>金</p>","<p id='GI1'>銀</p>","<p id='GI2'>銀</p>",
			"<p id='KE1'>桂</p>","<p id='KE2'>桂</p>","<p id='KY1'>香</p>","<p id='KY2'>香</p>",
			"<p id='FU1'>歩</p>","<p id='FU2'>歩</p>","<p id='FU3'>歩</p>",
			"<p id='FU4'>歩</p>","<p id='FU5'>歩</p>","<p id='FU6'>歩</p>",
			"<p id='FU7'>歩</p>","<p id='FU8'>歩</p>","<p id='FU9'>歩</p>",
			"<p id='OU2'>玉</p>","<p id='HI2'>飛</p>","<p id='KA2'>角</p>",
			"<p id='KI3'>金</p>","<p id='KI4'>金</p>","<p id='GI3'>銀</p>","<p id='GI4'>銀</p>",
			"<p id='KE3'>桂</p>","<p id='KE4'>桂</p>","<p id='KY3'>香</p>","<p id='KY4'>香</p>",
			"<p id='FU10'>歩</p>","<p id='FU11'>歩</p>","<p id='FU12'>歩</p>",
			"<p id='FU13'>歩</p>","<p id='FU14'>歩</p>","<p id='FU15'>歩</p>",
			"<p id='FU16'>歩</p>","<p id='FU17'>歩</p>","<p id='FU18'>歩</p>"
			];
//成り駒の配列(先手,後手)(len40)
var promotionPiece=["None","<p class='skoma promotion'id='HI1'>竜</p>","<p class='skoma promotion'id='KA1'>馬</p>",
					"None","None","<p class='skoma promotion'id='GI1'>全</p>","<p class='skoma promotion'id='GI2'>全</p>",
					"<p class='skoma promotion'id='KE1'>圭</p>","<p class='skoma promotion'id='KE2'>圭</p>","<p class='skoma promotion'id='KY1'>杏</p>","<p class='skoma promotion'id='KY2'>杏</p>",
					"<p class='skoma promotion'id='FU1'>と</p>","<p class='skoma promotion'id='FU2'>と</p>","<p class='skoma promotion'id='FU3'>と</p>",
					"<p class='skoma promotion'id='FU4'>と</p>","<p class='skoma promotion'id='FU5'>と</p>","<p class='skoma promotion'id='FU6'>と</p>",
					"<p class='skoma promotion'id='FU7'>と</p>","<p class='skoma promotion'id='FU8'>と</p>","<p class='skoma promotion'id='FU9'>と</p>",
					"None","<p class='gkoma promotion'id='HI2'>竜</p>","<p class='gkoma promotion'id='KA2'>馬</p>",
					"None","None","<p class='gkoma promotion'id='GI3'>全</p>","<p class='gkoma promotion'id='GI4'>全</p>",
					"<p class='gkoma promotion'id='KE3'>圭</p>","<p class='gkoma promotion'id='KE4'>圭</p>","<p class='gkoma promotion'id='KY3'>杏</p>","<p class='gkoma promotion'id='KY4'>杏</p>",
					"<p class='gkoma promotion'id='FU10'>と</p>","<p class='gkoma promotion'id='FU11'>と</p>","<p class='gkoma promotion'id='FU12'>と</p>",
					"<p class='gkoma promotion'id='FU13'>と</p>","<p class='gkoma promotion'id='FU14'>と</p>","<p class='gkoma promotion'id='FU15'>と</p>",
					"<p class='gkoma promotion'id='FU16'>と</p>","<p class='gkoma promotion'id='FU17'>と</p>","<p class='gkoma promotion'id='FU18'>と</p>"
					];
//駒の動き
//⑧×⑨
//⑦⓪①
//⑥駒②
//⑤④③
//10種類の駒と10種類の動き
var CheckPieceId=["OU","HI","KA","KI","GI","KE","KY","FU","RY","UM"];
var pieceMotionTable=[[1,1,1,1,1,1,1,1,0,0],//王
					  [2,0,2,0,2,0,2,0,0,0],//飛
					  [0,2,0,2,0,2,0,2,0,0],//角
					  [1,1,1,0,1,0,1,1,0,0],//金
					  [1,1,0,1,0,1,0,1,0,0],//銀
					  [0,0,0,0,0,0,0,0,1,1],//桂
					  [2,0,0,0,0,0,0,0,0,0],//香
					  [1,0,0,0,0,0,0,0,0,0],//歩
					  [2,1,2,1,2,1,2,1,0,0],//竜
					  [1,2,1,2,1,2,1,2,0,0],//馬
					 ];
var pieceMotionYX=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-2,-1],[-2,+1]];
var gPieceMotionYX=[[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[2,1],[2,-1]];
var MovePossible=[];//タッチした駒の移動可能マスを保持する配列
var GameRecord={'g1':'EMP','g2':'EMP','g3':'EMP','g4':'EMP','g5':'EMP','g6':'EMP','g7':'EMP','g8':'EMP','g9':'EMP',
				'g12':'EMP','g13':'EMP','g14':'EMP','g15':'EMP','g16':'EMP','g17':'EMP','g18':'EMP','g19':'EMP','g20':'EMP',
				'd1s1':'KY4','d1s2':'KE4','d1s3':'GI4','d1s4':'KI4','d1s5':'OU2','d1s6':'KI3','d1s7':'GI3','d1s8':'KE3','d1s9':'KY3',
				'd2s1':'EMP','d2s2':'HI2','d2s3':'EMP','d2s4':'EMP','d2s5':'EMP','d2s6':'EMP','d2s7':'EMP','d2s8':'KA2','d2s9':'EMP',
				'd3s1':'FU18','d3s2':'FU17','d3s3':'FU16','d3s4':'FU15','d3s5':'FU14','d3s6':'FU13','d3s7':'FU12','d3s8':'FU11','d3s9':'FU10',
				'd4s1':'EMP','d4s2':'EMP','d4s3':'EMP','d4s4':'EMP','d4s5':'EMP','d4s6':'EMP','d4s7':'EMP','d4s8':'EMP','d4s9':'EMP',
				'd5s1':'EMP','d5s2':'EMP','d5s3':'EMP','d5s4':'EMP','d5s5':'EMP','d5s6':'EMP','d5s7':'EMP','d5s8':'EMP','d5s9':'EMP',
				'd6s1':'EMP','d6s2':'EMP','d6s3':'EMP','d6s4':'EMP','d6s5':'EMP','d6s6':'EMP','d6s7':'EMP','d6s8':'EMP','d6s9':'EMP',
				'd7s1':'FU1','d7s2':'FU2','d7s3':'FU3','d7s4':'FU4','d7s5':'FU5','d7s6':'FU6','d7s7':'FU7','d7s8':'FU8','d7s9':'FU9',
				'd8s1':'EMP','d8s2':'KA1','d8s3':'EMP','d8s4':'EMP','d8s5':'EMP','d8s6':'EMP','d8s7':'EMP','d8s8':'HI1','d8s9':'EMP',
				'd9s1':'KY1','d9s2':'KE1','d9s3':'GI1','d9s4':'KI1','d9s5':'OU1','d9s6':'KI2','d9s7':'GI2','d9s8':'KE2','d9s9':'KY2',
				's1':'EMP','s2':'EMP','s3':'EMP','s4':'EMP','s5':'EMP','s6':'EMP','s7':'EMP','s8':'EMP','s9':'EMP',
				's12':'EMP','s13':'EMP','s14':'EMP','s15':'EMP','s16':'EMP','s17':'EMP','s18':'EMP','s19':'EMP','s20':'EMP'
				};

//１.skoma２.skoma promotion３.gkoma４.gkoma promotion
var pieceIdRecord={'OU1':'skoma','HI1':'skoma','KA1':'skoma','KI1':'skoma','KI2':'skoma','GI1':'skoma','GI2':'skoma',
			 'KE1':'skoma','KE2':'skoma','KY1':'skoma','KY2':'skoma',
			 'FU1':'skoma','FU2':'skoma','FU3':'skoma','FU4':'skoma','FU5':'skoma','FU6':'skoma','FU7':'skoma','FU8':'skoma','FU9':'skoma',
			 'OU2':'gkoma','HI2':'gkoma','KA2':'gkoma','KI3':'gkoma','KI4':'gkoma','GI3':'gkoma','GI4':'gkoma',
			 'KE3':'gkoma','KE4':'gkoma','KY3':'gkoma','KY4':'gkoma',
			 'FU10':'gkoma','FU11':'gkoma','FU12':'gkoma','FU13':'gkoma','FU14':'gkoma','FU15':'gkoma','FU16':'gkoma','FU17':'gkoma','FU18':'gkoma'
		    };
		
//座標関連
var ky=0;
var kx=0;
var kys=0;//整数y
var kxs=0;//整数x
var banx=36;//将棋盤までのpx横幅(距離)
var bany=172;//将棋盤までのpx高さ(距離)
var plen=22;//駒置き場の長さ
var gw1=36;//g1までの横の距離
var gh1=76;//g1までの縦の距離
var sw1=36;//s1までの横の距離
var sh1=493;//s1までの縦の距離
var maindisp="";//メイン表示用
var sdisp="";//先手駒台表示用
var gdisp="";//後手駒台表示用
var userb=window.navigator.appName;//ユーザーブラウザ
var wnu=window.navigator.userAgent;//ユーザーエージェント
var useros;//ユーザーos
var userw=window.innerWidth;//ウィンドウの横幅
var userh=window.innerHeight;//ウィンドウの高さ

//フラグ関連
var teban="先手";
var firstChoiceFlg=true;//最初に駒を選択できる状態:true
var promotionFlg=false;
var mainCount=0;
var currentKomaClass="currentKomaClass初期化";
var currentKomaId="currentKomaId初期化";
var firstTouchMasu;//一度目にタッチしたマスのid
var firstTouchPiece;//一度目にタッチした駒のid
var currentMasu;//カレントのマスのid
var firstTouchMasuInOut;//最初にタッチしたマスが盤内か？
var firstTouchPiecePromotion;
var toukaritu;//透過率
var ytemp;
var xtemp;
var motigoma;//取得した駒
var supportTouch='ontouchend'in document;//タッチイベントがサポートされているか
var EVENTNAME=supportTouch ? 'touchstart':'mousedown';//タッチイベントかマウスダウンか

var promotion;//駒が成れるか？
var standId;//空いている駒台のid
var headId;//駒台のidの頭文字s又はg
//
var gameRecodedisp="";//棋譜記録の表示用
var kihu;//棋譜
var pieceConvert="";//漢字に変換
var checkPieceConvertId=["OU","HI","KA","KI","GI","KE","KY","FU"];
var checkPieceConvertKanji=["王","飛","角","金","銀","桂","香","歩"];
var checkPromotionPieceConvertKanji=["None","竜","馬","None","成銀","成桂","成香","と"];
var kihuFirstTouchFlg=true;//棋譜用に使うフラグ、最初にタッチできる時:true
var getFlg=false;//駒をとっていない

var sClassArray=["skoma","skoma promotion"];
var gClassArray=["gkoma","gkoma promotion"];
var justBefore=[];//直前の指し手のマスを格納する配列

function start(){
	gAria();
	mainAria();
	sAria();
	userCheck();
	document.getElementById("gdisp").innerHTML=gdisp;
	document.getElementById("maindisp").innerHTML=maindisp;
	document.getElementById("sdisp").innerHTML=sdisp;
	document.getElementById("useros").innerHTML=useros;//userのosを表示
	document.getElementById("userw").innerHTML=userw;//userの横幅を表示
	document.getElementById("userh").innerHTML=userh;//userの高さを表示
	document.getElementById("teban").innerHTML=teban;//手番
	//駒の配置とイベントリスナの登録
	setUp();
	//イベント分岐
	if(EVENTNAME=='touchstart'){
		document.addEventListener("touchstart",touchstart);
	}else{
		document.addEventListener("mousedown",mousedown);
	}
}

//後手駒台の作成
function gAria(){
	var gotekomadai=[];//後手の駒台
	gotekomadai=new Array(plen);
	for(let i=0;i<plen;i++){
		gpaneru="<div class='gStand'id='g"+i+"'>　</div>";
		gotekomadai[i]=gpaneru;
	}
	for(let i=0;i<plen;i++){
		gdisp+=gotekomadai[i];
		if(i==21){
		break;
		}
		if(i==10){
		gdisp+="<br>";
		}
	}
}
//先手駒台の作成
function sAria(){
	var sentekomadai=[];//先手の駒台
	sentekomadai=new Array(plen);
	for(let i=0;i<plen;i++){
		spaneru="<div class='sStand'id='s"+i+"'>　</div>";
		sentekomadai[i]=spaneru;
	}
	for(let i=0;i<plen;i++){
		sdisp+=sentekomadai[i];
		if(i==21){
		break;
		}
		if(i==10){
		sdisp+="<br>";
		}
	}
}

//中央メイン盤の作成
function mainAria(){
	var board=[];//メインの将棋盤
	board=new Array(11);
	for(let y=0;y<11;y++){
		board[y]=new Array(11)
		for(let x=0;x<11;x++){
			if((y==0)){
				if((x==0)||(x==10)){
					paneru="<div class='topAndCornerEdge'id='d"+y+"s"+x+"'>　</div>";
				}else{
				paneru="<div class='topEdge'id='d"+y+"s"+x+"'>　</div>";
				}
			}
			else if((x==10)&&((y>=1)&&(y<=9))){
				paneru="<div class='rightEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if((y==10)&&((x>=1)&&(x<=9))){
				paneru="<div class='bottomEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if((x==0)&&((y>=1)&&(y<=9))){
				paneru="<div class='leftEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if(((y==10)&&(x==0))||((y==10)&&(x==10))){
				paneru="<div class='bottomAndCornerEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else{
				paneru="<div class='ban'id='d"+y+"s"+x+"'>　</div>";
			}
			board[y][x]=paneru;
		}
	}
	for(let y=0;y<11;y++){
		for(let x=0;x<11;x++){
		maindisp+=board[y][x];
		if((y==10)&&(x==10)){
		break;
		}
		if(x==10){
		maindisp+="<br>";
		}
		}
	}	
}


//ユーザーosチェック
function userCheck(){
if(wnu.indexOf('iPhone')!=-1){
	useros="iPhone";
	}else if(wnu.indexOf('iPod')!=-1){
	useros="iPod";
	}else if(wnu.indexOf('Android')!=-1){
	useros="Android";
	}else if(wnu.indexOf('Windows')!=-1){
	useros="Windows";
	}else{
	useros="わかりません";
	}
	return useros;
}
//駒の配置
function setUp(){
	//初期配置用のマスのId(先手,後手)
	let initialPlacementMasuId=["d9s5","d8s8","d8s2","d9s4","d9s6","d9s3","d9s7","d9s2","d9s8","d9s1","d9s9","d7s1","d7s2","d7s3","d7s4","d7s5","d7s6","d7s7","d7s8","d7s9",
								"d1s5","d2s2","d2s8","d1s6","d1s4","d1s7","d1s3","d1s8","d1s2","d1s9","d1s1","d3s9","d3s8","d3s7","d3s6","d3s5","d3s4","d3s3","d3s2","d3s1"];
	//駒の配置(先手,後手)
	for(let i=0;i<piece.length;i++){
		document.getElementById(initialPlacementMasuId[i]).insertAdjacentHTML('afterbegin',piece[i]);
		if(i<20){
			document.getElementById(pieceId[i]).setAttribute('class','skoma');//.setAttribute('class','skoma');.className='skoma';
		}else{
			document.getElementById(pieceId[i]).setAttribute('class','gkoma');
		}
	}
}
//パソコン用マウスダウン
function mousedown(e){
	touchPiece(e.pageX,e.pageY);
}
//スマホ用タッチスタート
function touchstart(e){
	//もしタッチされたのが一箇所であるなら
	if(e.targetTouches.length==1){
		touch=e.targetTouches[0];
		touchPiece(touch.pageX,touch.pageY);
	}
}
//start()系終了---------------------------------------------------------------------------------------

//touchPiece()系開始----------------------------------------------------------------------------------
//タッチされた時のイベントの処理
function touchPiece(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//駒の選択から移動まで
	if(firstChoiceFlg==true){
		//自分の駒を選択している。
		if(isMyPiece()==true){
			choice();
console.log("駒Id："+GameRecord[firstTouchMasu]);//マスIdから駒Idを返す
console.log("駒クラス："+pieceIdRecord[firstTouchPiece]);//駒Idから駒クラスを返す

			firstChoiceFlg=false;
			return;
		}else{
		//自分の駒を選択していない。
			reset();
			return;
		}
	}
	//二回目にタッチしたマスに自分の駒がある。又は、盤外である。
	//盤内からの移動かつ配列内に存在しない場所をタップした
	//最初にタッチしたマスが盤外かつ相手の駒がある
	if((isMyPiece())||(!InOut(kys,kxs))||
	   ((firstTouchMasuInOut)&&(MovePossible.indexOf(currentMasu)==-1))||
	   ((firstTouchMasuInOut==false)&&(opponentPiece()==true))
		){
		console.log("現在のマスにある駒のクラス:"+currentKomaClass);
		reset();
		return;
	}
//もし盤外から歩を使うなら、二歩チェックをする。
	if((firstTouchMasuInOut==false)&&
	   (firstTouchPiece.substr(0,2)=="FU")){
		nihuCheck(kxs);//二歩チェック
		if(nihudesuFlg){
			alert("二歩です。");
			nihudesuFlg=false;//二歩フラグをfalseに戻しておく
			reset();
			return;
		}
	}
//もし盤外から歩を使うなら、１段目(９段目)をチェックする。
	if((firstTouchMasuInOut==false)&&
	   (firstTouchPiece.substr(0,2)=="FU")){
		;
		//reset();
		//return;
	}
//もし盤外から桂,香を使うなら、桂,香チェックをする。
	if((firstTouchMasuInOut==false)&&
	  ((firstTouchPiece.substr(0,2)=="KE")||
	   (firstTouchPiece.substr(0,2)=="KY"))){
		;
		//reset();
		//return;
	}
	//移動先に相手の駒が存在する。
	//駒を取った場合の処理
	if(isExistPiece()){
		getFlg=true;//駒をとった
		motigoma=currentKomaId;//取った駒のid
		document.getElementById(motigoma).remove();//駒の削除
		//削除と同時に連想配列をEMPにする
		GameRecord[currentMasu]='EMP';//現在のマスにある駒（相手の駒）を無しにする
		if((currentKomaClass=="gkoma")||(currentKomaClass=="gkoma promotion")){
			headId="s";
		}else{
			headId="g";
		}
		VacantStandId(headId);//standId(空いている駒台のid)を返す		
		pieseInsert(motigoma,standId,teban);//駒の追加
		getFlg=false;
	}
	//最初に選択した駒が成り駒であるなら
	if(promotionFlg==true){
		document.getElementById(firstTouchPiece).remove();//最初に選択した駒の削除
		GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
		//駒を削除した後に、マスの色を元に戻す
		AllReverseCssRule();
		promotionMove();//成り駒用の移動
		PlaySound();//音を出す
		console.log("成り駒を移動しました。");
	}else{
		MoveCommit();
	}
	if(teban=="先手"){
		teban="後手";
	}else{
		teban="先手";
	}
	document.getElementById("teban").innerHTML=teban;//手番
	MovePossible.length=0;
	cssRuleJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	firstChoiceFlg=true;
	kihuFirstTouchFlg=true;
	promotionFlg=false;
	getFlg=false;//駒をとっていない
	return;
}

var nihudesuFlg=false;
//二歩チェックメソッド
function nihuCheck(kxs){
	let switchNihuCheck;//スイッチ用
	let nihuCheckMasu;
	if(teban=="先手"){
		switchNihuCheck="skoma";
	}else{
		switchNihuCheck="gkoma";
	}
	//1から9まで回す。
	for(let i=1;i<10;i++){
		nihuCheckMasu="d"+i+"s"+kxs;//筋を取得
		if((GameRecord[nihuCheckMasu].substr(0,2)=="FU")&&
   		   (pieceIdRecord[GameRecord[nihuCheckMasu]]==switchNihuCheck)){
			//リセット
			nihudesuFlg=true;
			return;	
		}
		nihudesuFlg=false;
	}
	return;
}

function getCoordinate(tx,ty){
	let keep;
	kx=Math.floor(tx);
	ky=Math.floor(ty);
	kxs=Math.floor(((tx-banx)/32)+1);
	kys=Math.floor(((ty-bany)/32)+1);
	gxs=Math.floor(((tx-gw1)/32)+1);
	gys=Math.floor(((ty-gh1)/32)+1);
	sxs=Math.floor(((tx-sw1)/32)+1);
	sys=Math.floor(((ty-sh1)/32)+1);
	currentMasu="d"+kys+"s"+kxs;//カレントのタッチマス
	inout=InOut(kxs,kys);//盤内？外？
	//y,x座標の表示
	document.getElementById("ky").innerHTML=ky;//y座標
	document.getElementById("kx").innerHTML=kx;//x座標
	if(gys==1){
		currentMasu="g"+gxs;
	}else if(gys==2){
		currentMasu="g"+Number(11+gxs);
	}else if(sys==1){
		currentMasu="s"+sxs;
	}else if(sys==2){
		currentMasu="s"+Number(11+sxs);
	}else{
	;
	}
	currentKomaId=GameRecord[currentMasu];//カレントのマスにある駒のId
	currentKomaClass=pieceIdRecord[currentKomaId];//カレントのマスにある駒のクラス
	kihuConvert(teban,kys,kxs);//棋譜形式に変換
	if(kihuFirstTouchFlg==true){
		keep=checkPieceConvertId.indexOf(currentKomaId.substr(0,2));
		pieceConvert=checkPieceConvertKanji[keep];
		//自分の駒を選択している。
		if(isMyPiece()==true){
			kihuFirstTouchFlg=false;
		}else{
			;
		}
	}else{
		keep=checkPieceConvertId.indexOf(firstTouchPiece.substr(0,2));
		pieceConvert=checkPieceConvertKanji[keep];
		kihuFirstTouchFlg=true;
	}
	document.getElementById("kihu").innerHTML=kihu+pieceConvert;//棋譜の表示
}

//リセット用
function reset(){
	touka(firstTouchPiece,1);//一度目にタッチした駒の透過率を戻す
	firstChoiceFlg=true;
	kihuFirstTouchFlg=true;
	promotionFlg=false;
	currentKomaClass="classリセット";
	currentKomaId="idリセット";
	firstTouchPiece="リセット";
	firstTouchMasu="リセット";
	getFlg=false;//駒をとっていない
	MovePossible.length=0;
	AllReverseCssRule();//全ての盤クラスの変更を元に戻す
	cssRuleJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
}
//駒の選択
function choice(){
	toukaritu=0.3;
	touka(currentKomaId,toukaritu);//タッチした駒の透過率を変える
	firstTouchMasu="d"+kys+"s"+kxs;//一度目にタッチしたマスのid
	firstTouchPiece=currentKomaId;//一度目にタッチした駒のid
	firstTouchMasuInOut=InOut(kys,kxs);//一度目にタッチした場所は盤内か？
	promotionFlg=firstPromotion();//一度目にタッチした駒は成り駒か？
	console.log(promotionFlg);//成り駒かどうか？
	pieceMotionRule();//駒の動きを表示する
	currentKomaClass="リセット"
}

//選択した駒の移動完了まで
function MoveCommit(){
	let promotionMoveFlg=false;
	let res;
	document.getElementById(firstTouchPiece).remove();//最初に選択した駒の削除
	GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
	AllReverseCssRule();//駒を削除した後に、マスの色を元に戻す
//ここで成るか成らないかの判定-----------------------------------------------------------------
	while(promotionMoveFlg==false){
		//成り駒でない＆最初は盤内＆成れる駒
		if((promotionFlg==false)&&
		   (firstTouchMasuInOut)&&
		   (possiblePromotion.indexOf(firstTouchPiece)!=-1)){
			//桂馬が１,２段目に移動したら強制的に成る//桂馬が８,９段目に移動したら強制的に成る
			if((checkKeima(currentMasu,teban))&&
			   (firstTouchPiece.substr(0,2)=="KE")){
				promotionMoveFlg=true;
				break;
			}
			//香,歩が１段目に移動したら強制的に成る//香,歩が９段目に移動したら強制的に成る
			if((checkKyouFu(currentMasu,teban))&&
			  ((firstTouchPiece.substr(0,2)=="KY")||(firstTouchPiece.substr(0,2)=="FU"))){
				promotionMoveFlg=true;
				break;
			}
			//後手陣である。又は、飛車,角,銀の成り返りである。//先手陣である。又は、飛車,角,銀の成り返りである。
			if((checkAria(currentMasu,teban))||
			  ((checkAria(firstTouchMasu,teban))&&
			  ((firstTouchPiece.substr(0,2)=="HI")||
			   (firstTouchPiece.substr(0,2)=="KA")||
			   (firstTouchPiece.substr(0,2)=="GI")))){
				res=confirm("成りますか？");
   				if(res==true){
					promotionMoveFlg=true;
					break;
				}else{
					;
				}		
			}
		}
		break;
	}
	if(promotionMoveFlg==true){
		promotionMove();//駒の昇格
		PlaySound();//音を出す
		reset();
		return;
	}
	pieseInsert(firstTouchPiece,currentMasu,teban);//駒の追加
	//移動完了の前のバグ確認(マスの中に２枚存在するバグ対策)
	if(document.getElementById(currentMasu).children.length>1){
		alert("バグです。盤の中に２枚以上入りまみた。");	
	}
	PlaySound();//音を出す
	reset();
	return;
}
function pieseInsert(firstTouchPiece,currentMasu,teban){
	let whatNumber=pieceId.indexOf(firstTouchPiece);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(currentMasu).insertAdjacentHTML('afterbegin',piece[whatNumber]);
	document.getElementById(pieceId[whatNumber]).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
	GameRecord[currentMasu]=firstTouchPiece;//現在のマスに駒を追加する	
	pieceIdRecord[firstTouchPiece]=switchClassArray[0];
	//駒をとった場合の最初は棋譜に記録しない
	if(getFlg==false){
		gameRecodedisp+=kihu+pieceConvert+"　"//棋譜を記録として残す。
		justBefore.push(currentMasu);//配列に直前の指し手のマスを格納
		cssRuleJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	}
	
}
//駒の昇格,成り駒の移動
function promotionMove(){
	let whatNumber=pieceId.indexOf(firstTouchPiece);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(currentMasu).insertAdjacentHTML('afterbegin',promotionPiece[whatNumber]);
	document.getElementById(pieceId[whatNumber]).setAttribute('class',switchClassArray[1]);//駒にクラスの設定
	GameRecord[currentMasu]=firstTouchPiece;//現在のマスに駒を追加する
	pieceIdRecord[firstTouchPiece]=switchClassArray[1];//昇格クラスにする
	gameRecodedisp+=kihu+pieceConvert+"　"//棋譜を記録として残す。
	justBefore.push(currentMasu);//配列に直前の指し手のマスを格納
	cssRuleJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
}
//駒の動きのルール---------------------------------------------------------------------
function pieceMotionRule(){
	//console.log(MovePossible);
	let indexNumber;
	let a,b,temp;
	//if((teban=="先手")&&
	if(firstTouchMasuInOut){
		indexNumber=CheckPieceId.indexOf(firstTouchPiece.substr(0,2));
		//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
		if(((currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion"))&&
		   ((firstTouchPiece.substr(0,2)=="GI")||
		    (firstTouchPiece.substr(0,2)=="KE")||
		    (firstTouchPiece.substr(0,2)=="KY")||
		    (firstTouchPiece.substr(0,2)=="FU"))){
			indexNumber=3;
		}
		if((firstTouchPiece.substr(0,2)=="HI")&&
		   ((currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion"))){
			indexNumber=8;
		}
		if((firstTouchPiece.substr(0,2)=="KA")&&
		   ((currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion"))){
			indexNumber=9;
		}
		for(let i=0;i<pieceMotionYX.length;i++){
			temp=pieceMotionTable[indexNumber][i];
			if(temp>=1){
				a=pieceMotionYX[i][0];
				b=pieceMotionYX[i][1];
				
				if(teban=="後手"){
					a=gPieceMotionYX[i][0];
					b=gPieceMotionYX[i][1];
				}
				motionY=kys+a;
				motionX=kxs+b;
				pieceMotion="d"+motionY+"s"+motionX;
				if((!(((motionY>=1)&&(motionY<=9))&&((motionX>=1)&&(motionX<=9))))||
				   ((teban=="先手")&&
				   ((pieceIdRecord[GameRecord[pieceMotion]]=="skoma")||(pieceIdRecord[GameRecord[pieceMotion]]=="skoma promotion")))){
					//盤外または自分の駒があればスルーする
					continue;
				}
				if((!(((motionY>=1)&&(motionY<=9))&&((motionX>=1)&&(motionX<=9))))||
				   ((teban=="後手")&&
				   ((pieceIdRecord[GameRecord[pieceMotion]]=="gkoma")||(pieceIdRecord[GameRecord[pieceMotion]]=="gkoma promotion")))){
					//盤外または自分の駒があればスルーする
					continue;
				}
				MovePossible.push(pieceMotion);//配列にルールを格納
				cssRule(pieceMotion);
				
				//tempが2：駒の動きが２の時の処理。
				if((temp==2)&&(GameRecord[pieceMotion]=="EMP")){
					do{
						motionY+=a;
						motionX+=b;
						pieceMotion="d"+motionY+"s"+motionX;
						if((!(((motionY>=1)&&(motionY<=9))&&((motionX>=1)&&(motionX<=9))))||
						   ((teban=="先手")&&
						   ((pieceIdRecord[GameRecord[pieceMotion]]=="skoma")||(pieceIdRecord[GameRecord[pieceMotion]]=="skoma promotion")))){
							//盤外または自分の駒があればスルーする
							continue;
						}
						if((!(((motionY>=1)&&(motionY<=9))&&((motionX>=1)&&(motionX<=9))))||
						   ((teban=="後手")&&
						   ((pieceIdRecord[GameRecord[pieceMotion]]=="gkoma")||(pieceIdRecord[GameRecord[pieceMotion]]=="gkoma promotion")))){
							//盤外または自分の駒があればスルーする
							continue;
						}
						MovePossible.push(pieceMotion);//配列にルールを格納
						cssRule(pieceMotion);
					}while(GameRecord[pieceMotion]=="EMP");
					//移動先に駒がなければ繰り返す
				}
			}
		}
	}
}

//移動可能なマスの色を変更する
function cssRule(rulePiece){
	document.getElementById(rulePiece).style.backgroundColor="lightpink";
	document.getElementById(rulePiece).style.border="1px solid red";
	document.getElementById(rulePiece).style.boxSizing="border-box";
}
//直前の指し手のマスの色を変更する
function cssRuleJustBefore(rulePiece){
	document.getElementById(rulePiece).style.backgroundColor="#FFFF66";//yellow系
	document.getElementById(rulePiece).style.border="1px solid orange";
	document.getElementById(rulePiece).style.boxSizing="border-box";
}
//全ての盤クラスの変更を元に戻す
function AllReverseCssRule(){
	var banElements=document.getElementsByClassName("ban");
	for(let i=0;i<banElements.length;i++){
		banElements[i].style.backgroundColor="khaki";
		banElements[i].style.border="0.5px solid black";
		banElements[i].style.boxSizing="border-box";
	}
}

//最初に選択した駒は成り駒か？
function firstPromotion(){
	if((currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion")){
		return true;
	}else{
		return false;
	}
}
//将棋盤の中か？外か？
function InOut(y,x){
	if(((x>=1)&&(x<=9))&&((y>=1)&&(y<=9))){
		return true;
	}
	return false;
}
//自分の駒を選択しているか？、先手はskomaクラス,後手はgkomaクラス
function isMyPiece(){
	if(((teban=="先手")&&(currentKomaClass=="skoma"))||((teban=="先手")&&(currentKomaClass=="skoma promotion"))||
	   ((teban=="後手")&&(currentKomaClass=="gkoma"))||((teban=="後手")&&(currentKomaClass=="gkoma promotion"))){
		return true;
	}
	return false;
}
//相手の駒を選択しているか？
function opponentPiece(){
	if(((teban=="先手")&&(currentKomaClass=="gkoma"))||((teban=="先手")&&(currentKomaClass=="gkoma promotion"))||
	   ((teban=="後手")&&(currentKomaClass=="skoma"))||((teban=="後手")&&(currentKomaClass=="skoma promotion"))){
		return true;
	}
	return false;
}
//タッチしたマスに駒が存在するか？
function isExistPiece(){
	if((currentKomaClass=="skoma")||(currentKomaClass=="gkoma")||
	   (currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion")){
		return true;
	}
	return false;
}

//先手陣か？後手陣か？
function checkAria(tempMasu,teban){
	//正規表現
	let regex1,regex2,regex3;
	let promotion1,promotion2,promotion3;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
		regex3=new RegExp(/d3s[1-9]/);
	}else{
		regex1=new RegExp(/d7s[1-9]/);
		regex2=new RegExp(/d8s[1-9]/);
		regex3=new RegExp(/d9s[1-9]/);	}
	promotion1=regex1.test(tempMasu);
	promotion2=regex2.test(tempMasu);
	promotion3=regex3.test(tempMasu);
	if((promotion1)||(promotion2)||(promotion3)){
		return true;
	}
	return false;
}

//桂馬が必ず成る後手陣の１段目,２段目か？先手陣の８段目,９段目か？
function checkKeima(currentMasu,teban){
	//正規表現
	let regex1,regex2;
	let promotion1,promotion2;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
	}else{
		regex1=new RegExp(/d8s[1-9]/);
		regex2=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(currentMasu);
	promotion2=regex2.test(currentMasu);
	if((promotion1)||(promotion2)){
		return true;
	}
	return false;
}

//香,歩が必ず成る後手陣の１段目か？先手陣の９段目か？
function checkKyouFu(currentMasu,teban){
	//正規表現
	let regex1;
	let promotion1;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
	}else{
		regex1=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(currentMasu);
	if(promotion1){
		return true;
	}
	return false;
}

//空いている駒台のidを返す
function VacantStandId(headId){
	let getchild;
	if(headId=="s"){
		headId="s";
	}else{
		headId="g";
	}
	for(let i=0;i<plen;i++){
		if((i==0)||(i==10)||(i==11)){
		continue;//判定しない
		}
		standId=headId+i;
		getchild=document.getElementById(standId).children;
		if(getchild.length==0){
			break;
		}
	}
	return standId;
}

//選択した駒(id)の透過率を変化させる
function touka(currentKomaId,toukaritu){
	document.getElementById(currentKomaId).style.opacity=toukaritu;//0.3:30%
}

//読みやすい棋譜に変換
function kihuConvert(teban,kys,kxs){
	let kihuHeadArray=[1,2,3,4,5,6,7,8,9];
	let kihuTailArray=[1,2,3,4,5,6,7,8,9];
	let kihuHeadDispArray=["１","２","３","４","５","６","７","８","９"];
	let kihuTailDispArray=["一","二","三","四","五","六","七","八","九"];
	let tebanDisp,kihuHead,kihuTail;
	let whatNumberHead;
	let whatNumberTail;
	if(InOut(kxs,kys)){
		if(teban=="先手"){
		tebanDisp="▲";
		}else{
		tebanDisp="△";
		}
		kihuHead=(10-kxs);
		kihuTail=kys;
		//全角に変換
		whatNumberHead=kihuHeadArray.indexOf(kihuHead);
		kihuHeadDisp=kihuHeadDispArray[whatNumberHead];
		//全角漢数字に変換
		whatNumberTail=kihuHeadArray.indexOf(kihuTail);
		kihuTailDisp=kihuTailDispArray[whatNumberTail];
		kihu=tebanDisp+kihuHeadDisp+kihuTailDisp;//表示用
	}else{
		kihu="盤外です";
	}
}

//ボタンで棋譜の表示
function GameRecode(){
		document.getElementById("gameRecorddisp").innerHTML=gameRecodedisp;//棋譜変換
}

//continue:リロード
function inputContinue(){
	//var inputContinue="<input type='button' value='もう一回遊ぶ'onClick='inputContinue();'size='50'>";
	//document.getElementById("inputContinue").innerHTML=inputContinue;
	window.location.reload();
}

//音楽関連
var audioElem;
function PlaySound() {
	audioElem = new Audio();
	audioElem.src = "mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume = 0.5;
	audioElem.play();
}
