import RFValue from ""
import { render } from 'react-dom'
import Ionicons from 'react-native-vector-icons/Ionicons'

render() {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.cardContainer}>
                <View style={StyleSheet.authorContainer}>
                    <View style={StyleSheet.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png"}
                            style={StyleSheet.profileImage}
                            ></Image>
                    </View>
                    <View style={StyleSheet.authorNameContainer}>
                        <Text style={StyleSheet.authorNameText}>{this.props.post.auther}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={StyleSheet.postImage} />
                <View style={StyleSheet.captionContainer}>
                    <Text style={StyleSheet.captionText}>
                        {this.props.post.capton}
                    </Text>
                </View>
                <View style={StyleSheet.actionContainer}>
                    <View style={StyleSheet.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={StyleSheet.likeText}>12K</Text>
                    </View>
                </View>
            </View>
        </View>

    );
}

renderItem = {{ item: post }} => {
    return <PostCard post={post} navigation={this.props.navigation} />; 
}