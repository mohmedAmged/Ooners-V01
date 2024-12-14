import React from 'react';
import styles from './singlePropertyDocument.module.css';
import Image from 'next/image';
import plainIcon from '../../imgs/singleProperty/f7_doc-plaintext.png'
import downloadIcon from '../../imgs/singleProperty/mynaui_download.png'
interface DocumentItem {
    docName: string;
  }
  
  interface SinglePropertyDocumentsProps {
    documentItems: DocumentItem[];
    headText: string;
  }
// export default function SinglePropertyDocument() {
//   return (
//     <div className='singlePropertyDocument_handler'>
      
//     </div>
//   )
// }
const SinglePropertyDocument: React.FC<SinglePropertyDocumentsProps> = ({ documentItems, headText }) => {
    return (
      <div className={`${styles.singlePropertyDocument_handler}`}>
        <h2>{headText}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
          {documentItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center border rounded-md justify-between space-x-2 p-4 "
            >
              <div className={`${styles.docInfos}`}>
                <Image src={plainIcon} alt={item.docName} className={`w-8 h-8 ${styles.docsImage}`} />
                <span className="text-gray-700 font-medium">{item.docName}</span>
              </div>
              <Image src={downloadIcon} alt={item.docName} className={`w-8 h-8 ${styles.downloadICon}`} />
            </div>
          ))}
          <div className={`${styles.allDocsAction}`}>
            <button type='button'>
                Download all
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SinglePropertyDocument;
