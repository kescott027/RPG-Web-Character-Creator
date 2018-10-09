import React from 'react';
import {connect} from 'react-redux';
import {Row} from 'reactstrap';
import * as images from '../../images';

class Component extends React.Component {

	render() {
		const {description, theme} = this.props;
		return (
			<div>
				<Row className='justify-content-end'>
					<div className={`header header-${theme}`}>CHARACTER IMAGE</div>
				</Row>
				<hr/>
				<img className='img-fluid' src={description.image ? description.image : ''}
					 alt='not found' ref={img => this.img = img} onError={() => this.img.src = images.Crest}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		description: state.description,
		theme: state.theme
	};
};

export const CharacterImage = connect(mapStateToProps)(Component);