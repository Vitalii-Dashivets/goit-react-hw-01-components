import PropTypes from "prop-types";
// import css from "./statistics.module.css";
import { StatisticSection, Title, StatList, Item , Label, Percentage} from './Statistics.styled.js';

export default function Statistics({ title, stats } ) {
    return (<StatisticSection>
        {title &&(<Title >{ title}</Title>)}

        <StatList>
            {stats.map(elem => {
             return(<Item key={elem.id}>
                <Label>{elem.label}</Label>
                <Percentage>{elem.percentage}</Percentage>
            </Item>
            )}
            )}
           
        </StatList>
    </StatisticSection>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ),

}