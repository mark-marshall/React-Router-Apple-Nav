import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import NavWrapper from './NavWrapper';
import Home from './Components/Home';
import Mac from './Components/Mac';
import Iphone from './Components/Iphone';
import Ipad from './Components/Ipad';
import Watch from './Components/Watch';
import Support from './Components/Support';
import Music from './Components/Music';
import Tv from './Components/Tv';

const AppWrap = styled.div`
  width: 1200px;
  margin: auto;
`;

class App extends Component {
  state = {
    navs: [
      {
        tagged: 'Mac',
        linked: '/mac',
        childLinked: [
          'MacBook',
          'MacBook Air',
          'MacBook Pro',
          'iMac',
          'iMac Pro',
          'Mac Pro',
          'Mac Mini',
          'Accessories',
          'Mojave',
          'Compare'
        ]
      },
      {
        tagged: 'iPad',
        linked: '/ipad',
        childLinked: [
          'iPad Pro',
          'iPad Pro 10.5',
          'iPad 9.7',
          'iPad Mini 4',
          'iOS 12',
          'Apple Pencil',
          'Smart Keyboard',
          'Accessories',
          'Compare'
        ]
      },
      {
        tagged: 'iPhone',
        linked: '/iphone',
        childLinked: [
          'iPhone Xs',
          'iPhone Xr',
          'iPhone 8',
          'iPhone 7',
          'iOS 12',
          'AirPods',
          'Accessories',
          'Compare'
        ]
      },
      {
        tagged: 'Watch',
        linked: '/watch',
        childLinked: [
          'Apple Watch Series 4',
          'Apple Watch Nike+',
          'Apple Watch Hermes',
          'Apple Watch Series 3',
          'watchOS',
          'Bands',
          'Accessories',
          'Compare'
        ]
      },
      {
        tagged: 'TV',
        linked: '/tv',
        childLinked: [
          'Apple TV 4K',
          'Apple TV',
          'TV App',
          'Accessories',
          'Compare'
        ]
      },
      {
        tagged: 'Music',
        linked: '/music',
        childLinked: [
          'Apple Music',
          'iTunes',
          'Home Pod',
          'AirPods',
          'iPod Touch',
          'Music Accessories',
          'Gift Cards'
        ]
      },
      {
        tagged: 'Support',
        linked: '/support',
        childLinked: ['Communities', 'Contact Support']
      }
    ]
  };

  render() {
    return (
      <AppWrap>
        <NavWrapper navs={this.state.navs} />
        <Route exact path="/" render={() => <Home navs={this.state.navs}/>} />
        <Route path="/mac" render={() => <Mac navs={this.state.navs}/>} />
        <Route path="/ipad" render={() => <Ipad navs={this.state.navs}/>} />
        <Route path="/iphone" render={() => <Iphone navs={this.state.navs}/>} />
        <Route path="/watch" render={() => <Watch navs={this.state.navs}/>} />
        <Route path="/tv" render={() => <Tv navs={this.state.navs}/>} />
        <Route path="/music" render={() => <Music navs={this.state.navs}/>} />
        <Route path="/support" render={() => <Support navs={this.state.navs}/>} />
      </AppWrap>
    );
  }
}

export default App;
