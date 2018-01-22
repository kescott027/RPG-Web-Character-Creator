import React from 'react';
import popup from 'react-popup';
import {connect} from 'react-redux';
import {SkillRow, SkillPopup} from './index';

class SkillBlock extends React.Component {


  handleClick = () => {
    const {type, skills} = this.props;

    popup.create({
      title: `${type} Skills`,
      className: 'alert',
      content: (
        <div className='table'>
          <div className='table-header'>
            <div className='table-cell'>Show/Hide</div>
            <div className='table-cell'>Skill</div>
          </div>
          {Object.keys(skills).map((key)=>
            skills[key].type===type && (
              <SkillPopup skillKey={key} key={key}/>
            ),
          )}
        </div>
      )
    })
  }

  render() {
    const {type, skills} = this.props;
    return (
        <div className='table-table'>
          <div className='table-heading' onClick={this.handleClick}>{type}</div>
          <div className='module table'>
            <div className='table-header'>
              <div className='table-cell'>Skill</div>
              <div className='table-cell'>Career</div>
              <div className='table-cell'>Rank</div>
              <div className='table-cell'>Dice Pool</div>
            </div>
            {Object.keys(skills).map((skillKey)=>
              skills[skillKey].type === type &&
                <SkillRow skillKey={skillKey} key={skillKey}/>
            )}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        masterSkills: state.masterSkills,
        skills: state.skills
    };
}

export default connect(mapStateToProps)(SkillBlock);
