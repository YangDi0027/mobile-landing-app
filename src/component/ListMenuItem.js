import React from 'react'

export default class ListMenuItem extends React.Component {
    render() {
        return (
            <li className="list_menu_item" key={Math.random()}>
                <img className={'item_image'} src={this.props.imgUrl} alt={'img'} />
                <p>{this.props.text}</p>
            </li>
        )
    }
}