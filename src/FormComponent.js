import React, {Component} from 'react';
import { CalciteIcon, CalciteLabel, CalciteInput, CalciteRadioGroup, CalciteRadioGroupItem, CalciteButton} from "@esri/calcite-components-react";

export default class FormComponent extends Component {

    constructor(props){
        super(props);
        this.questionOne = "Enter information";
        this.questionTwo = "Select Location";
    }

    render(){
        return (
            <div className="form-container">
                <form id="form">
                    <CalciteLabel>
                        <span className="form-heading"><span className="medium">1.</span> {this.questionOne}</span>
                    </CalciteLabel>
                    <CalciteLabel>
                        <p>Name</p>
                        <CalciteInput type="text" name="name"></CalciteInput>
                    </CalciteLabel>
                    <CalciteLabel>
                        <p>GeoForm Link</p>
                        <CalciteInput type="text" name="geoform-link"></CalciteInput>
                    </CalciteLabel>
                    <CalciteLabel>
                        <p>Title</p>
                        <CalciteInput type="text" name="tite"></CalciteInput>
                    </CalciteLabel>
                    <CalciteLabel>
                        <p>Comments</p>
                        <CalciteInput
                            type="textarea" name="comments" icon="chevron-down">
                        </CalciteInput>
                    </CalciteLabel>
                    <CalciteLabel>
                        <span className="form-heading"><span className="medium">2.</span> {this.questionTwo}</span>
                    </CalciteLabel>
                    <CalciteRadioGroup layout="horizontal" appearance="outline" width="full">
                        <CalciteRadioGroupItem value="search" name="search" checked="" tabindex="0">Search</CalciteRadioGroupItem>
                        <CalciteRadioGroupItem value="browse" name="browse">Browse</CalciteRadioGroupItem>
                    </CalciteRadioGroup>
                    <div className="search-section">
                        <CalciteLabel>
                            <p>Search</p>
                            <CalciteInput type="text"></CalciteInput>
                            <CalciteButton><CalciteIcon icon="pin"></CalciteIcon>Locate file</CalciteButton>
                        </CalciteLabel>
                    </div>
                </form>
            </div>
        )
    }

}