import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem/index';



// interface Repository{
//   id: number
//   name: string
// }

// interface Props{
//   repositories: Repository[]
// }

// interface State{
//   newRepository?: string
// }

// export default class RepositoryList extends Component<Props, State>{

//   state = {
//     newRepository: '',
//   }

//   componentDidMount(){}
//   render(){
//     const { repositories } = this.props;
//     const { newRepository } = this.state;
//     return (
//       <ul>
//         {repositories.map(repository => <li>{repository.name}</li>)}
//       </ul>
//     );

//   }
// }

interface StateProps{
  repositories: Repository[]
}

interface DispatchProps{
  loadRequest(): void;
}
type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props>{
  componentDidMount(){
    const { loadRequest } = this.props;

    loadRequest();
  }
  render(){
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );

  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);