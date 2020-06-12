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
    checkValidPageNumber = () => {
        // validate pagenum
        return true;
    }

    getSlicedArray(pagenum) {   

        let { totalPages, recordlimit} = this.state;
        // calclating first and last index of the requested record set

        let firstIndex = (pagenum === 1) ? 0 : (( pagenum - 1 ) * recordlimit);
        let lastindex = (pagenum === totalPages) ? this.state.postalData.length : firstIndex + recordlimit;
        
        // slice down the array to first 
        let temparray = this.state.postalData.slice(firstIndex,lastindex);

        this.setState({
            temparray : [...temparray]
        })  

    }   

    getFirstPage = () => {
        this.setState({
            currentPage : 1
        })
        this.getSlicedArray(1);
    }
    getPrevPage = () => {
        if(this.state.currentPage !== 1) {

            let pagenum = this.state.currentPage;

            this.setState({
                currentPage : pagenum-1
            })
            this.getSlicedArray(pagenum-1);
        }
       
    }
    getNextPage = () => {
        if(this.state.currentPage !== this.state.totalPages){

            let pagenum = this.state.currentPage;

            this.setState({
                currentPage : pagenum+1
            })
           
            this.getSlicedArray(pagenum+1);
        }
      
        // this.getSlicedArray( this.state.pagenum ++ , "next" );
    }
    getLastPage = () => {
        let totalPages = this.state.totalPages;
        this.setState({
            currentPage : totalPages
        })
        this.getSlicedArray(totalPages);
    }

    render() {
        return (
            <div className="paginated-table-wrapper">
               
                <LocationList filteredPostalCodes={this.state.temparray}/>

                <div className="pagination-title"> --- Pages --- </div>
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