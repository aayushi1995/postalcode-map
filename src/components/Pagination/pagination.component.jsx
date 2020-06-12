import React from 'react';

import LocationList from '../LocationList/location-list.components';

import './pagination.styles.scss';
import {ReactComponent as Back} from '../../assets/back.svg'; 
import {ReactComponent as Next} from '../../assets/next.svg';

class Pagination extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postalData :  [...this.props.postalData],
            temparray : [],
            currentPage : 1,
            totalPages: 0,
            recordlimit : parseInt(this.props.recordlimit)
        }
    }
    componentDidMount() {
        this.calculatePages();
        this.getSlicedArray(this.state.currentPage);
    }

    calculatePages = () => {

        // calculate total pages
        this.setState({
            totalPages : Math.ceil(this.state.postalData.length / this.state.recordlimit)
        });
    }

    getSlicedArray(pagenum) {   

        let { totalPages, recordlimit} = this.state;

        // calclating first and last index of the requested record set

        let firstIndex = (pagenum === 1) ? 0 : (( pagenum - 1 ) * recordlimit);
        let lastindex = (pagenum === totalPages) ? this.state.postalData.length : firstIndex + recordlimit;
        
        // slice down the array from firstIndex to LastIndex 
        let temparray = this.state.postalData.slice(firstIndex,lastindex);

        this.setState({
            temparray : [...temparray]
        })  

    }   

    getFirstPage = () => {

        // Request for first page
        this.setState({
            currentPage : 1
        })
        this.getSlicedArray(1);
    }

    getPrevPage = () => {

        // Request for previous Page only if the current page is not the first page
        if(this.state.currentPage !== 1) {

            let pagenum = this.state.currentPage;

            this.setState({
                currentPage : pagenum-1
            })

            this.getSlicedArray(pagenum-1);
        }
    }

    getNextPage = () => {

        // Request for next Page only if the current page is not the last page
        if(this.state.currentPage !== this.state.totalPages){

            let pagenum = this.state.currentPage;

            this.setState({
                currentPage : pagenum+1
            })

            this.getSlicedArray(pagenum+1);
        }      
    }
    getLastPage = () => {

        // Request for first page
        let totalPages = this.state.totalPages;

        this.setState({
            currentPage : totalPages
        })

        this.getSlicedArray(totalPages);
    }

    render() {
        return (
            <div className="paginated-table-wrapper">

                {/* Paginated data */}
                <LocationList filteredPostalCodes={this.state.temparray}/>

                <div className="pagination-title"> --- Pages --- </div>

                {/* Buttons to navigated through pages */}
                <div className="pagination-wrapper">
                    <button className="first" onClick={this.getFirstPage}> 1 </button>
                    <button className="prev" onClick={this.getPrevPage}> <Back/> </button>
                    <button className="next" onClick={this.getNextPage}> <Next/> </button>
                    <button className="last" onClick={this.getLastPage}> {this.state.totalPages} </button>
                </div>
            </div>
        )
    }
}

export default Pagination;