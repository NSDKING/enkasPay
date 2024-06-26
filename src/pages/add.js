import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from "../graphql/mutations";

 
  
 export default function AddProduct() {
 
    return(
        <button className='testBUTT' onClick={async ()=>{
            const file = `
                            id,name,image,type,price,buycount,cartCount,createdAt,updatedAt
                5aec7961-453a-42fb-81cb-6604650194b7,Netflix solo,net,abonnement, 2600, 6150, 20550 ,2023-05-14T17:16:58.960Z,2023-05-14T17:16:58.960Z
                d95351f0-2e41-4b75-bbff-30fcb602281a,netflix famille,net,abonnement, 7500, 18000, 50000 ,2023-05-14T17:28:47.246Z,2023-05-14T17:28:47.246Z
                062744fc-6ef2-4bf2-9fd8-fed640ac5add,spotify famille,spo,abonnement, 7500, 18000, 50000 ,2023-05-14T17:28:47.872Z,2023-05-14T17:28:47.872Z
                a240bc1c-e155-46f0-8606-53e83f0e46eb,spotify solo,spo,abonnement, 2600, 6150, 20550 ,2023-05-14T17:28:48.332Z,2023-05-14T17:28:48.332Z
                4471038d-2634-4911-872d-9fbf281d0a66,disney + solo,19,abonnement, 2600, 6150, 20550 ,2023-05-14T17:28:48.718Z,2023-05-14T17:28:48.718Z
                ffa7658d-e4b7-4550-95e5-d705b0538054,disney + famille,disney,abonnement, 7500, 18000, 50000 ,,,2023-05-14T17:31:29.865Z,2023-05-14T17:31:29.865Z
                475da70c-0828-4e4e-90e6-c2604c33456c,VPN famille,VPN,abonnement, 7500, 18000, 50000,2023-05-14T17:34:11.831Z,2023-05-14T17:34:11.831Z
                06fa2e12-72eb-41bb-8e7d-29f418be58ec,prime solo,prime,abonnement, 2600, 6150, 20550,2023-05-14T17:37:34.350Z,2023-05-14T17:37:34.350Z
                275408a2-cef1-449c-af06-8c6727d7f672,VPN solo,VPN,abonnement, 2600, 6150, 20550,2023-05-14T17:39:55.759Z,2023-05-14T17:39:55.759Z
                caf044b3-ba4c-4de4-92f2-303132b30056,prime famille,prime,abonnement, 7500, 18000, 50000 ,,,2023-05-14T17:43:16.277Z,2023-05-14T17:43:16.277Z
                6c2e231a-4f5c-4f31-b1ab-8c014df079cc,ADN solo,ADN,abonnement, 2600, 6150, 20550,2023-05-14T17:45:20.281Z,2023-05-14T17:45:20.281Z
                daf24ccc-207c-4e34-902d-90ec2f45aee4,ADN famille,ADN,abonnement, 7500, 18000, 50000,2023-05-14T17:46:36.709Z,2023-05-14T17:46:36.709Z
                189218f0-0347-4bf7-bcc5-342ec22e6ea9,xbox 10e,xbox,code, 8000, null, null,2023-05-14T17:51:38.106Z,2023-05-14T17:51:38.106Z
                a2c3bc74-db0b-4362-b470-c0212224e684,xbox 20e,xbox,code, 15000, null, null,2023-05-14T17:55:12.136Z,2023-05-14T17:55:12.136Z
                4322f503-e33a-43d9-a5b6-cc77c32e4952,xbox 50e,xbox,code, 37000, null, null,2023-05-14T17:57:42.361Z,2023-05-14T17:57:42.361Z
                932f85a4-8330-4e46-be92-d91e43f6d352,xbox 100e,xbox,code, 70000, null, null,2023-05-14T17:59:59.634Z,2023-05-14T17:59:59.634Z
                208c0b6e-3410-4314-a45c-cc214c7b8e11,psn 10e,psn,code, 8000, null, null,2023-05-14T18:27:07.654Z,2023-05-14T18:27:07.654Z
                a6917d6f-7d00-460c-8f52-769ec83b07cc,psn 20e,psn,code, 15000, null, null,2023-05-14T18:29:18.597Z,2023-05-14T18:29:18.597Z
                4bf0e582-a5e9-4f0d-82ea-5267cf5f0673,psn 50e,psn,code, 37000, null, null,2023-05-14T18:30:42.572Z,2023-05-14T18:30:42.572Z
                81ac8df3-88d4-48ef-9bf4-1d0bab4851e6,psn 100e,psn,code, 70000, null, null,2023-05-14T18:31:51.101Z,2023-05-14T18:31:51.101Z`
                try {
                const response =file;
                const rows = response.split('\n');
                const headers = rows[0].split(',');

                for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].split(',');

                const input = {
                    name: cells[1],
                    image: cells[2],
                    type: cells[3],
                    price: {
                    one_month: parseInt(cells[4]),
                    three_month: parseInt(cells[5]),
                    one_year: parseInt(cells[6])
                    },

                };

                console.log(input)
                await API.graphql(graphqlOperation(createProduct, { input }));
     
                 }

                console.log('CSV data uploaded successfully');
                } catch (error) {
                console.log('Error uploading CSV data: ', error);
                }
        }}>grand super test</button>
    )

}