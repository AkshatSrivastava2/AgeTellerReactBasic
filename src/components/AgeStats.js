import React,{ Component } from 'react';
import partyPopper from '../assets/congrats.jpg';
class AgeStats extends Component{
    constructor()
    {
        super();
        this.state={
            showImage:false
        }
    }
    timeSince(date){

        let today=new Date().getTime();
        let other_date=new Date(date).getTime();
        let difference=(today-other_date);

        if(difference<0)
        {
            this.setState({
                showImage:false
            });

            return `Invalid date selected,Choose previous date`
        }
        
        this.setState({
            showImage:true
        });

        let days=Math.floor(difference/(1000*3600*24));
        let years=Math.floor(days/(365));
        days-=years*365;
        let months=Math.floor(days/31);
        days-=months*31;
        

        return `${years} years,${months} months and ${days} days`
    }
    render(){
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>{this.timeSince(this.props.date)}!</h4>
                {
                this.state.showImage?<img src={partyPopper} alt="party-popper" className="partyPopper"/>:<div></div>
                }
            </div>
        )
    }
}
export default AgeStats;