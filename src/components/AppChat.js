import React, { Component } from 'react';
import './../App.css';
import { firebaseDb } from './../firebase/index.js'
// 投稿されたメッセージ内容のUIをインポート
import Message from './Message.js'
// チャット投稿フォームのUIをインポート
import ChatBox from './ChatBox.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// firebaseへの参照を取得する
const messagesRef = firebaseDb.ref('messages');

class AppChat extends Component {
  // Props：一度設定してしまえば後から変更はできない（constのようなもの？）
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      text: "", // 入力されたメッセージのテキスト
      user_name: "",  //入力されたユーザ名
      profile_image: "",  //入力されたプロフィール画像のURL
      messages: []  //保存されている全てのメッセージ
    }
  }

  render() {
    return (
      // MuiThemeProviderで、囲んだ場所からこ要素すべてに一定のスタイルを適用できる
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Chatアプリ</h2>
          </div>
          <div className="MessageList">
            {/* map()メソッドは、与えられた関数を配列の全ての要素に対して実行し、その結果から新しい配列を作る */}
            {this.state.messages.map((m, i) => {
              return <Message key={i} message={m} />
            })}
          </div>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }

  // ユーザー名、メッセージのテキスト、画像URLが変更されるたびにstate?が更新される
  // State：状態を管理するとのこと。Propsと違って後から変更可能。（letのようなもの？）
  onTextChange(e) {
    if(e.target.name == 'user_name') {
      this.setState({
        "user_name": e.target.value,
      });
    } else if (e.target.name == 'profile_image') {
      this.setState({
        "profile_image": e.target.value,
      });
    } else if (e.target.name == 'text') {
      this.setState({
        "text": e.target.value
      });
    }
  }

  // 送信（send）ボタンをクリックした時の処理
  onButtonClick() {
    // バリデーション（空欄になっていないかのチェック）
    if(this.state.user_name == "") {
      alert('user_name empty')
      return
    } else if(this.state.text == "") {
      alert('text empty')
      return
    }
    // firebaseにメッセージを登録する
    // pushメソッドは新しい要素を追加するたびに一意のIDを付与するとのこと。これによって生成されるIDはタイムスタンプに基づいているため、リストのアイテムは自動的に時系列に並び替えられるとのこと。便利。。。
    messagesRef.push({
      "user_name": this.state.user_name,
      "profile_image": this.state.profile_image,
      "text": this.state.text
    });
  }

  // データベースの変更をキャッチ
  // データベース内に新しい子要素が追加されるたびに、stateのmessagesも更新されるので、画面の見た目も更新される。
  componentWillMount() {
    messagesRef.on('child_added', (snapshot) => {
      // 値を取得
      const m = snapshot.val();
      let msgs = this.state.messages

      msgs.push({
        'text': m.text,
        'user_name': m.user_name,
        'profile_image': m.profile_image
      });

      this.setState({
        messages: msgs
      });
    });
  }
  
}

export default AppChat;