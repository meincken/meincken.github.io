import { UserData } from '@/data/userData'
import styles from './Table.module.css'

export const Table = ({userData}:{userData:UserData[]}) => {
  return (
    <div className={styles.table}>
      {userData.map(function(list){
        return (
          <div className={styles.row} key={list.id}>
            <span>{list.firstName} {list.lastName}</span>
            <span>{list.rating}</span>
            <span>{list.country}</span>
            <span>{list.submissionDate}</span>
            <span>{list.verified}</span>
          </div>
        )
      })}
    </div>
  )
}