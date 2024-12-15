import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import * as SQLite from 'expo-sqlite';
import {drizzle} from 'drizzle-orm/expo-sqlite';
import {useMigrations} from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./drizzle/migrations";

const expo = SQLite.openDatabaseSync('workouts.db');

const db = drizzle(expo);

export default function App() {
    const {success, error} = useMigrations(db, migrations)

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto"/>
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
