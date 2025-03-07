import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertaiment",
    "Film and Animation",
    "How-to and style",
    "Music",
    "News and Politics",
    "People and blogs",
    "Pets and animals",
    "Science and Technology",
    "Sports",
    "Travel and events"
]

async function main() {
    console.log("Seeding categories...");

    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name.toLowerCase()}`
        }))
        await db.insert(categories).values(values)
        console.log("Categories seeded successfully!")
    } catch (error) {
        console.error("Error seeding categories: ", error)
    }
}

main()