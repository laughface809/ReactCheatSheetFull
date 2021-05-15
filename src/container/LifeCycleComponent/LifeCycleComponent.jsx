import React, {Component, Fragment} from "react";
import './LifeCycleComponent.css'


class LifeCycleComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerived');
        return null;
    }

    componentDidMount() {
        console.log('Didmount');
        /*setTimeout(() => {
            this.setState({
                count: 2
            })
            }, 2000)*/
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.group('shouldComponentUpdate')
        //console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        console.log('this state :', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getsnapshot');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didupdate');
    }

    componentWillUnmount() {
        console.log('willunmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render');
        return(
            <Fragment>
            <p>Life Cycle Component</p>
            <button className={"btn"} onClick={this.changeCount}> Component Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleComponent;