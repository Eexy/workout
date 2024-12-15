import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import * as SQLite from 'expo-sqlite';
import {drizzle} from 'drizzle-orm/expo-sqlite';
import {useMigrations} from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./drizzle/migrations";
import React from "react";

const expo = SQLite.openDatabaseSync('workouts.db');

const db = drizzle(expo);

export default function App() {
    const {success, error} = useMigrations(db, migrations)

    return (
        <View style={styles.container}>
            <Button title={"add blocks"} onPress={() => Alert.alert('add block')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
