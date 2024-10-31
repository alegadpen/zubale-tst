/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {getPosts, IPost, IPosts} from "./api.ts";
import { CardHeader } from "./components/CardHeader.component.tsx";
import FastImage from "react-native-fast-image";
import {PostInteractions} from "./components/PostInteractions.component.tsx";
import {PostMeta} from "./components/PostMeta.component.tsx";
import {generalStyles} from "./generalStyles.ts";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data : IPosts = await getPosts();
        setPosts(data);
      } catch (error) {
        setError("Failed to load feed.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  const renderPictureCard = ({ item } : IPost) => {
    return (
        <View style={generalStyles.bottomSpace}>
          <CardHeader avatar={item.avatar} name={item.name} location={item.location} />
          <FastImage source={{ uri : item.image }} style={{ width: '100%', height: '400' }} resizeMode={FastImage.resizeMode.contain} />
          <PostInteractions liked={item.liked} likes={item.likes} comments={item.comments} saved={item.saved} />
          <PostMeta name={item.name} description={item.description} createdAt={item.createdAt} />
        </View>
    );
  };

  return (
    <SafeAreaView style={generalStyles.bg}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View
        contentInsetAdjustmentBehavior="automatic" style={generalStyles.bg}>
        {!!loading && <Text style={generalStyles.bigText}>Cargando contenido..</Text>}
        {!!error && <Text style={generalStyles.bigText}>Ocurrió un error</Text>}
        {!!posts && posts.length > 0 &&
          <FlatList data={posts} renderItem={renderPictureCard} keyExtractor={(item) => item.id.toString()} />
        }
      </View>
    </SafeAreaView>
  );
}


export default App;
