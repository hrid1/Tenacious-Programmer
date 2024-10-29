import PropTypes from "prop-types";

const Link = ({routes}) => {
    return (
        <li className="hover:bg-slate-950 p-1 rounded-md">
             <a href={routes.path}>{routes.name}</a>
        </li>
    );
};

export default Link;

Link.propTypes = {
    routes : PropTypes.object,
}