import React from "react";
// Material UIのパーツを利用する
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// チャットの投稿フォームのUI
export default class ChatBox extends React.Component {
  render() {
    return(
      // MuiThemeProviderで、囲んだ場所からこ要素すべてに一定のスタイルを適用できる
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            {/* propsはプロパティの意味。一度設定してしまえば後から変更はできない */}
            {/* TextFieldを使用すると、ユーザーはテキストを入力および編集できる */}
            {/* ユーザ名 */}
            <TextField name='user_name' onChange={this.props.onTextChange} className="" placeholder="Name" />
            <br></br>
            {/* プロフィールアイコンのURL入力欄 */}
            <TextField name='profile_image' onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
          </div>
          {/* テキスト入力欄 */}
          <TextField rows="4" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
          {/* 送信（send）ボタン */}
          <RaisedButton primary="true" label="Send" className=""    onClick={this.props.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}