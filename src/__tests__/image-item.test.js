import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ImageItem from '../compent/image-item';

configure({ adapter: new Adapter() });

const imageItems ={
    title:'11',
    imageItems:[{
        name:'1',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },{
        name:'2',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        name:'3',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }]
};

describe('<ImageItem />', () => {
  it('renders one <ImageItem /> components', () => {
    const wrapper = shallow(<ImageItem data={imageItems} />);
    expect(wrapper.find('.image-item')).to.have.lengthOf(1);
    expect(wrapper.find('.image-item-content')).to.have.lengthOf(3);
    expect(wrapper.find('.image-item-head')).to.have.lengthOf(1);

  });
});