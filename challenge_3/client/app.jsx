class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1: false,
      f2: false,
      confirmation: false,
    };
  }

  handleCheckout() {
    this.setState({
      checkout: false,
      f1: true,
    });
  }

  handleF1Click() {
    this.setState({
      f1: false,
      f2: true,
    })
  }

  handleF2Click() {
    this.setState({
      f2: false,
      f3: true,
    })
  }

  handleF3Click() {
    this.setState({
      f3: false,
      confirmation: true,
    })
  }

  handlePurchaseClick() {
  }




  render() {
    let button;
    if (this.state.checkout) {
      button = <div><button id="checkout" onClick={this.handleCheckout.bind(this)}>Checkout</button></div>
    };

    let f1;
    if (this.state.f1) {
      f1 = <F1 handleF1Click={this.handleF1Click.bind(this)}/>
    };

    let f2;
    if (this.state.f2) {
      f2 = <F2 handleF2Click={this.handleF2Click.bind(this)}/>
    }

    let f3;
    if (this.state.f3) {
      f3 = <F3 handleF3Click={this.handleF3Click.bind(this)}/>
    }

    let confirmation;
    if (this.state.confirmation) {
      confirmation = <Confirmation handlePurchaseClick={this.handlePurchaseClick.bind(this)} />
    }

    return (
      <div>
        {button}
        {f1}
        {f2}
        {f3}
        {confirmation}
      </div>
    );
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="f1">
        <form>
          <div>
            <label>Name: </label>
            <input type="text" id="name" name="name" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" id="email" name="email" onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" id="password" name="password" onChange={this.handleInputChange}/>
          </div>
        </form>
        <div className="button">
          <button type="submit" onClick={this.props.handleF1Click}>Next</button>
        </div>
      </div>
    );
  }
}

const F2 = (props) => {
  return (
    <div id="f2">
      <form>
        <div>
          <label>Address Line 1: </label>
          <input type="text" id="address_line1" name="user_address_line1" />
        </div>
        <div>
          <label>Address Line 2: </label>
          <input type="text" id="address_line2" name="user_address_line2" />
        </div>
        <div>
          <label>City: </label>
          <input type="text" id="address_city" name="user_address_city" />
        </div>
        <div>
          <label>State: </label>
          <input type="text" id="address_state" name="user_address_state" />
        </div>
        <div>
          <label>Zip Code: </label>
          <input type="number" id="address_zipcode" name="user_zipcode" />
        </div>
        <div>
          <label>Phone: </label>
          <input type="tel" id="phone" name="user_phone" />
        </div>
      </form>
      <div className="button">
        <button type="submit" onClick={props.handleF2Click}>Next</button>
      </div>
    </div>
  );
}

const F3 = (props) => {
  return (
    <div id="f3">
      <form>
        <div>
          <label>Credit Card Number: </label>
          <input type="number" id="ccnumber" name="user_ccnumber" />
        </div>
        <div>
          <label>Expiration Date: </label>
          <input type="text" id="expirydate" name="user_expirydate" />
        </div>
        <div>
          <label>CVV: </label>
          <input type="number" id="cvv" name="user_cvv" />
        </div>
        <div>
          <label>Billing Zip Code: </label>
          <input type="number" id="address_billing_zipcode" name="user_billing_zipcode" />
        </div>
      </form>
      <div className="button">
        <button type="submit" onClick={props.handleF3Click}>Next</button>
      </div>
    </div>
  );
}

const Confirmation = (props) => {
  return (
    test
  )
}

ReactDOM.render(<App />, document.getElementById('app'))