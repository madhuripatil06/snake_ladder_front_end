import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';

var Login = React.createClass({
    getInitialState: function(){
        return {
            username: "",
            no_of_players: 1
        };
    },

    login: function(e){
        e.preventDefault();
        $.ajax({
          url: "http://localhost:8080/login/",
          withCredentials: true,
          data: {username: this.state.username, no_of_players: this.state.no_of_players},
          dataType: 'json',
          method: 'POST',
          success: function(output, status, xhr) {
            console.log(xhr.getAllResponseHeaders())
            this.props.callback(true, xhr.getResponseHeader('Set-Cookie'));
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },


    setUserName: function(event){
        this.setState({username: event.target.value});
    },

    setNoOfPlayers: function(event){
        this.setState({no_of_players: event.target.value});
    },

  render: function() {
    var container = <div className="container">
            <form className="col s12 well">
              <br/><br/><br/>
              <div className="row">
                <div className="input-field col s4 center center-block offset-s3">
                  <input id="name" type="text" className="validate" onBlur={this.setUserName}/>
                  <label htmlFor="name">Player Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4 center offset-s3">
                  <input id="no of players" type="text" className="validate" onBlur={this.setNoOfPlayers}/>
                  <label htmlFor="no of players">No. of players</label>
                </div>
              </div>
                <br/><br/>
              <div className="row">
                   <button className="btn waves-effect waves-light col s2 center offset-s4" onClick={this.login}>Submit
                    <i className="material-icons right">send</i>
                  </button>
              </div>
            </form>
    </div>
    return container
  }
});


var CommentBox = React.createClass({
    getInitialState: function(){
        return {number: 0};
    },

    rollDice: function(){
        this.setState({number: Math.round(Math.random()*6)});
    },

  render: function() {
    cookie.save(this.props.cookie);
    var container = <div id="container">
      <div id="board">
        <table>
        <tbody>
          <tr>
            <td id="99">99</td>
            <td id="98" className="snake">98</td>
            <td id="97">97</td>
            <td id="96">96</td>
            <td id="95" className="ladder">95</td>
            <td id="94">94</td>
            <td id="93">93</td>
            <td id="92" className="snake">92</td>
            <td id="91">91</td>
            <td id="90">90</td>
          </tr>
          <tr>
            <td id="80" className="snake">80</td>
            <td id="81" className="ladder">81</td>
            <td id="82">82</td>
            <td id="83">83</td>
            <td id="84" className="ladder">84</td>
            <td id="85" className="snake">85</td>
            <td id="86">86</td>
            <td id="87" className="snake">87</td>
            <td id="88">88</td>
            <td id="89" className="ladder">89</td>
          </tr>
          <tr>
            <td id="79" className="snake_ladder">79</td>
            <td id="78">78</td>
            <td id="77">77</td>
            <td id="76">76</td>
            <td id="75" className="snake_ladder">75</td>
            <td id="74">74</td>
            <td id="73">73</td>
            <td id="72" className="snake">72</td>
            <td id="71">71</td>
            <td id="70" className="ladder">70</td>
          </tr>
          <tr>
            <td id="60" className="snake">60</td>
            <td id="61">61</td>
            <td id="62">62</td>
            <td id="63" className="snake">63</td>
            <td id="64" className="ladder">64</td>
            <td id="65">65</td>
            <td id="66">66</td>
            <td id="67" className="snake_ladder">67</td>
            <td id="68">68</td>
            <td id="69">69</td>
          </tr>
           <tr>
            <td id="59" className="snake">59</td>
            <td id="58">58</td>
            <td id="57" className="snake">57</td>
            <td id="56">56</td>
            <td id="55" className="ladder">55</td>
            <td id="54">54</td>
            <td id="53" className="snake">53</td>
            <td id="52">52</td>
            <td id="51" className="ladder">51</td>
            <td id="50">50</td>
          </tr>
           <tr>
            <td id="40" className="snake">40</td>
            <td id="41" className="ladder">41</td>
            <td id="42">42</td>
            <td id="43">43</td>
            <td id="44" className="ladder">44</td>
            <td id="45" className="snake">45</td>
            <td id="46">46</td>
            <td id="47">47</td>
            <td id="48">48</td>
            <td id="49" className="ladder">49</td>
          </tr>
           <tr>
            <td id="39" className="snake">39</td>
            <td id="38" className="ladder">38</td>
            <td id="37" className="snake">37</td>
            <td id="36">36</td>
            <td id="35" className="snake">35</td>
            <td id="34">34</td>
            <td id="33">33</td>
            <td id="32">32</td>
            <td id="31" className="snake">31</td>
            <td id="30">30</td>
          </tr>
           <tr>
            <td id="20" className="snake">20</td>
            <td id="21">21</td>
            <td id="22" className="snake_ladder">22</td>
            <td id="23">23</td>
            <td id="24">24</td>
            <td id="25" className="ladder">25</td>
            <td id="26">26</td>
            <td id="27" className="snake">27</td>
            <td id="28">28</td>
            <td id="29" className="ladder">29</td>
          </tr>
           <tr>
            <td id="19" className="snake">19</td>
            <td id="18">18</td>
            <td id="17" className="snake">17</td>
            <td id="16">16</td>
            <td id="15">15</td>
            <td id="14" className="snake_ladder">14</td>
            <td id="13" className="snake">13</td>
            <td id="12">12</td>
            <td id="11">11</td>
            <td id="10" className="ladder">10</td>
          </tr>
          <tr>
            <td id="0">0</td>
            <td id="1">1</td>
            <td id="2">2</td>
            <td id="3">3</td>
            <td id="4">4</td>
            <td id="5" className="ladder">5</td>
            <td id="6">6</td>
            <td id="7">7</td>
            <td id="8">8</td>
            <td id="9">9</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div id="dice" onClick={this.rollDice}>
      <span>{this.state.number}</span></div>
     </div>

    return container
  }
});

var MainComponent =  React.createClass({
    getInitialState: function(){
        return (
            {
               loggedIn: false,
               cookie: ''
            }
        )
    },

    setLoggedIn: function(value, cookie_value){
        this.setState({loggedIn: value, cookie: cookie_value});
    },

    render : function(){
//        if(this.state.loggedIn == false){
            return (
                <div>
                    <Login callback={this.setLoggedIn} cookie={this.state.cookie}/>
                </div>
            )
//        }
//        return (
//            <div>
//                <CommentBox/>
//            </div>
//        )
    }
})


ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);