import { PictureInfo } from "./api.vm"

export const getImageList = async (): Promise<PictureInfo[]> => {
    return await [
        {
            id: "1",
            picUrl: "/assets/Dormilon.jfif",
            title: "Dormilón",
            breed: "dog",
            selected: false
        },
        {
            id: "2",
            picUrl: "/assets/Brothers.jfif",
            title: "Brothers",
            breed: "dog",
            selected: false
        },
        {
            id: "3",
            picUrl: "/assets/Romi.jfif",
            title: "Romi",
            breed: "dog",
            selected: false
        },
        {
            id: "4",
            picUrl: "/assets/Family.jfif",
            title: "Family",
            breed: "cat",
            selected: false
        },
        {
            id: "5",
            picUrl: "/assets/Zeus.jfif",
            title: "Zeus",
            breed: "cat",
            selected: false
        },
        {
            id: "6",
            picUrl: "/assets/Kira.jfif",
            title: "Kira",
            breed: "cat",
            selected: false
        },
    ]
}

