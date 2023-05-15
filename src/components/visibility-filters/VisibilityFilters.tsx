import { useSetActiveVisibilityFilter, useVisibilityFilter } from '../../hooks'
import { isTodosVisibilityFilter } from '../../utils'
import { TodosVisibilityFilter } from '../../types'
import styles from './VisibilityFilters.module.css'

export const VisibilityFilters = () => {
  const visibilityFilter = useVisibilityFilter()
  const setActiveVisibilityFilter = useSetActiveVisibilityFilter()

  const handleVisibilityFilterRadioChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const selectedValue = event.target.value
    if (isTodosVisibilityFilter(selectedValue)) {
      setActiveVisibilityFilter(selectedValue)
    }
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Visibility</legend>
      <div>
        <label htmlFor='allTodosRadio'>
          <span className={styles.radio__labelHiddenText}>Show </span>
          All todos
        </label>
        <input
          id='allTodosRadio'
          type='radio'
          name='todoItemsFilter'
          value={TodosVisibilityFilter.ALL_TODOS}
          checked={visibilityFilter === TodosVisibilityFilter.ALL_TODOS}
          onChange={handleVisibilityFilterRadioChange}
        />
      </div>
      <div>
        <label htmlFor='completedTodosOnlyRadio'>Completed only</label>
        <input
          id='completedTodosOnlyRadio'
          type='radio'
          name='todoItemsFilter'
          value={TodosVisibilityFilter.COMPLETED_ONLY}
          checked={visibilityFilter === TodosVisibilityFilter.COMPLETED_ONLY}
          onChange={handleVisibilityFilterRadioChange}
        />
      </div>
      <div>
        <label htmlFor='pendingTodosOnlyRadio'>Pending only</label>
        <input
          id='pendingTodosOnlyRadio'
          type='radio'
          name='todoItemsFilter'
          value={TodosVisibilityFilter.PENDING_ONLY}
          checked={visibilityFilter === TodosVisibilityFilter.PENDING_ONLY}
          onChange={handleVisibilityFilterRadioChange}
        />
      </div>
    </fieldset>
  )
}
