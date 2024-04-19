import config from "../config/configuration";
import { Client, Account, Databases, Storage, ID } from "appwrite";

export class offeredServices {
    client = new Client()
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)

    }

    async createBlog({ title, content, slug, bannerImage, status, author, authorName }) {
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId, 
                config.appWriteCollectionId, 
                slug, 
                {
                title,
                content,
                bannerImage,
                status,
                author,
                authorName
            })
        } catch (error) {

            console.log("Appwrite service :: createBlog :: error", error);
        }
    }

    async updateBlog(slug, { title, content, bannerImage, status }) {
        try {
            return await this.databases.updateDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                bannerImage,
                status,
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deleteBlog(slug) {
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,)
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }
    async getBlog(slug) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug)

        } catch (error) {
            console.log("Appwrite service :: getBlog :: error", error);
            return false;
        }
    }

    async getallBlog(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.appWriteDatabaseId, config.appWriteCollectionId, queries)

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }
    // file storage se mile gi baaki sab database se so only requires it

    async uploadFile(file) {
        try {
            return await this.storage.createFile(config.appWriteBucketId, ID.unique(), file)
            //    now here we want storage no database as image is stored in it  id.unique for creating file with different id and file to upload
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(config.appWriteBucketId, fileId)
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    async previewFile(fileId) {
        return this.storage.getFilePreview(
            config.appWriteBucketId,
            fileId)
    }


}
const services = new offeredServices()
export default services