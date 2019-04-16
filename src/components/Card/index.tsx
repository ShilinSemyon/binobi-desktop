import * as React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';
import { More, Visa } from '../../../docs/img';

import * as styles from './style.css';
import * as cardStyles from './style.css';

export type CardItem = {
  id: number;
  number: number;
  classes: string;
  active: boolean;
  type?: string;
};

export type CardList = {
  [key: number]: CardItem;
  map(param: (card: CardItem, index?: number, array?: CardList) => any): any;
};

interface IState {
  id: number;
  number: number;
  classes: string;
  active: boolean;
  type?: string;
}

interface IProps {
  data: CardItem;
  active: boolean;
}

class Card extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = this.props.data;
  }

  getCardStyle(): string {
    return classNames(
      cardStyles.card,
      this.state.classes,
      cardStyles.background,
      { [`${styles.cardActive}`]: this.props.active },
      { [`${styles.cardSecond}`]: !this.props.active }
    );
  }

  renderCardNumber() {
    return (
      <Row className={cardStyles.cardNumber}>
        <Col>****</Col>
        <Col>****</Col>
        <Col>****</Col>
        <Col>{this.state.number}</Col>
      </Row>
    );
  }

  renderCardType() {
    switch (this.state.type) {
      case 'visa':
        return <img src={Visa} />;
      default:
        return <img src={Visa} />;
    }
  }

  render() {
    return (
      <div className={this.getCardStyle()}>
        <div className={cardStyles.typeAndMore}>
          {this.renderCardType()}
          <img src={More} />
        </div>
        {this.renderCardNumber()}
        {/*<div className={cardStyles.wave}/>*/}
        <Row>
          <Col md={6} lg={6} className={cardStyles.cardHolder}>
            Card holder
          </Col>
          <Col md={6} lg={6} className={cardStyles.expires}>
            Expires
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} className={cardStyles.cardHolderName}>
            Lindsey Johnson
          </Col>
          <Col md={6} lg={6} className={cardStyles.expiredDate}>
            08/21
          </Col>
        </Row>
      </div>
    );
  }
}

export default Card;
