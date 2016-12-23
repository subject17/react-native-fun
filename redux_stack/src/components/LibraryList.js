import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        // Boilerplate setup for ListView
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.items);
    }

    renderRow(item) {
        return (
            <ListItem item={item} />
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { items: state.items };
};

export default connect(mapStateToProps)(LibraryList);
