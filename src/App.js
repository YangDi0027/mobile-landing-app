import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListMenuItem from './component/ListMenuItem';

import first_pack from './asset/Icon/first_pack.png';
import free_vr from './asset/Icon/free_vr.png';
import together from './asset/Icon/together.png';

import burn_en_us_set_photo_original from './asset/Set/burn_en_us_set_photo_original.png';
import colors_v_2_en_us_set_photo_original from './asset/Set/colors_v_2_en_us_set_photo_original.png';
import contents_image_bto_3_lj from './asset/Set/contents_image_bto_3_lj.png';
import contents_image_neqlof from './asset/Set/contents_image_neqlof.png';
import contents_image_xuhh_1_l from './asset/Set/contents_image_xuhh_1_l.png';

import ACS from './asset/Logo/ACS.png'; 
import forbes from './asset/Logo/forbes.png';
import garther from './asset/Logo/garther.png';
import live_science from './asset/Logo/live_science.png';
import npr from './asset/Logo/npr.png';
import Royal_s from './asset/Logo/Royal_s.png';

const list = [
  { name: 'test1', imgUrl: burn_en_us_set_photo_original },
  { name: 'test2', imgUrl: colors_v_2_en_us_set_photo_original },
  { name: 'test3', imgUrl: contents_image_bto_3_lj },
  { name: 'test4', imgUrl: contents_image_neqlof },
  { name: 'test5', imgUrl: contents_image_xuhh_1_l },
];

const list1 = [
  { name: '"Your kid to be the next Zuckerberg"', imgUrl: ACS },
  { name: '"The most exciting and ambitious home-chemistry educational projects."', imgUrl: forbes },
  { name: '"The classic chemistry set gets a 21st-century upgrade."', imgUrl: garther },
  { name: '"Distract kids from game consoles."', imgUrl: live_science },
  { name: 'test5', imgUrl: npr },
  { name: 'test6', imgUrl: Royal_s }
];

const MenuItem = ({ text, imgUrl, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>
    <div className="item-info">
      <h6 className="card-subtitle mb-2 text-muted">{text}</h6>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    </div>
    <div className="item-image" style={{ backgroundImage: `url(` + imgUrl + `)` }}></div>
  </div>;
};

const MenuItem1 = ({ text, imgUrl, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`} style={{ whiteSpace: 'pre-wrap', width: '20rem' }}>
    <div className="item-image">
      <img className="img-fluid" src={imgUrl} alt={'logo'} width={'100px'} />
    </div>
    <div className="item-info" style={{ padding: '1rem 2rem' }}>
      <span>{text}</span>
      <p className="bottom-hint">American Chemistry</p>
    </div>
  </div>;
};


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected_1: true,
      selected_2: true
    }
  }
  componentDidMount() {
    const video = document.querySelector(`#video`)
    if (video) {
      setTimeout(() => {
        video.play()
      }, 500)
    }
  }
  onSelect = key => {
    this.setState({ selected_1: key });
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <video
              id="video"
              className="video"
              loop
              autoPlay
              muted
              playsInline
              width={'100%'}
            >
              <source src={'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'} type='video/mp4' />
            </video>
          </div>
          <h5 className="title">
            {'Explore chemistry with your kids - get MEL Chemistry expertisements delivered to your door'}
          </h5>
          <p>
            {"New experiments each month to expand your child's horizons. Includes a free BR headset and Starter Kit."}
          </p>
          <div>
            <ul className="list_menu">
              <ListMenuItem key={1} imgUrl={first_pack} text={'2-3 new experiments delivered to your door every month'} />
              <ListMenuItem key={2} imgUrl={free_vr} text={'Full access to all experiments and VR lessons'} />
              <ListMenuItem key={3} imgUrl={together} text={'Spend educational time togeher with your kids'} />
            </ul>
          </div>
          <div className="m-t-b-2">
            <h5>What's inside</h5>
            <p>{'Everthing you need! Our kits contain all the neccessary chemicals, equiment, and instructions to successfully complete the experiments.'}</p>
          </div>
            <div className="scrolling-wrapper">
              {
                list.map(el => {
                  const { name, imgUrl } = el;
                  return  <div className="card" key={name}><MenuItem text={name} key={name} imgUrl={imgUrl} /></div>;
                })
              }
            </div>
          <div>
            <p>{'New designated chemistry topic every month supplemented by mobile app and exclusive access to VR chemistry lessons. Each set contains the necessary chemicals, components, and instructions to conduct 2-3 unique experiments.'}</p>
            <p>{'You will receive 1 experiment set each month. Each MEL Chemistry set includes 2-3 experiemtns and contains the equipment you will need to conduct the experiments; enough chemical reagents for at least 2 attepts, additional componies, and visual step-by-step instructions.'}</p>
          </div>
           <div className="scrolling-wrapper">
            {
               list1.map(el => {
                const { name, imgUrl } = el;
                return  <div className="card" key={name}><MenuItem1 text={name} imgUrl={imgUrl} /></div>;
              })
            }
          </div>
          <div style={{ margin: '2rem 0' }}>
            <h4>{'You will receive'}</h4>
            <ul className="list_menu">
              <li style={{ margin: '1rem 0' }}>
                <span style={{ color: 'darkgrey', fontSize: '1rem' }}>{'One-time delivery'}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><span>{'Starter Kit'}</span></div>
                  <div><span>{'Free'}</span></div>
                </div>
              </li>
              <li style={{ margin: '1rem 0' }}>
                <span style={{ color: 'darkgrey', fontSize: '1rem' }}>{'One-time delivery'}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><span>{'Starter Kit'}</span></div>
                  <div><span>{'Free'}</span></div>
                </div>
              </li>
              <li style={{ margin: '1rem 0' }}>
                <span style={{ color: 'darkgrey', fontSize: '1rem' }}>{'One-time delivery'}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div><span>{'Starter Kit'}</span></div>
                  <div><span>{'Free'}</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <button>Subscribe</button>
        </div>
      </div>
    );
  }
}

export default App;
