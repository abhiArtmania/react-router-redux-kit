import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureMockStore();

let wrapper;
let store;
store = mockStore({
  home:{
    user:{
      name:'Abhishek',
      location:'Varanasi'
    }
  }
})
const historyMock = { push: jest.fn() };

beforeEach(() => {
  wrapper = mount(<Provider store={store} key="provider">
      <Router>
        <Home history={historyMock} />
      </Router>
    </Provider>);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Home page", () => {
  it("should render properly", () => {
      expect(wrapper).toMatchSnapshot();
  })
})

describe("Home page test",()=>{
  it("Header renders properly in Home page",()=>{
    expect(wrapper.find('Header').exists()).toBe(true)
  })

  it("should have header - Home page",()=>{
    expect(wrapper.exists('[data-testid="home-txt"]')).toBe(true);
  })

  it("Should have input for email",()=>{
    expect(wrapper.find('[data-testid="email-input"]').length).toEqual(1)
  })

  it("Should have a button",()=>{
    expect(wrapper.find('[data-testid="button"]').length).toStrictEqual(1)
  })

  it('should respond to change event and change the state of the Home Component for email', () => {
    wrapper.find('[data-testid="email-input"]').hostNodes().simulate('change', { target: { name: 'email', value: 'test@gmail.com' } });
    expect(wrapper.find('[data-testid="email-input"]').hostNodes().props().value).toEqual('test@gmail.com');
  })

  it('should invoke history push on click of About us link', () => {
    wrapper.find('[data-testid="about-us-link"]').hostNodes().simulate('click');
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push.mock.calls[0]).toEqual(['/about']);
  })

  it("Error should be displayed when email is invalid and form is submitted",()=>{
    wrapper.find('[data-testid="email-input"]').hostNodes().simulate('change', { target: { name: 'email', value: '' } });
    const emailValue = wrapper.find('[data-testid="email-input"]').hostNodes().props().value
    wrapper.find('[data-testid="button"]').hostNodes().simulate('click');
    expect(wrapper.find('[data-testid="error-message"]').length).toEqual(1)
  })

})