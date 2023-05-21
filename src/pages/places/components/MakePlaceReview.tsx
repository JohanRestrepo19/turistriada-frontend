import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, TextArea } from '@/common/components'

export const MakePlaceReview = () => {
  return (
    <div className="card bg-white h-[300px] shadow-xl">
      <div className="card-body">
        <div className="card-title text-primary mb-2">
          <span>
            <FontAwesomeIcon icon={faCircleCheck} size="2x" />
          </span>
          <h1>Deja tu comentario!</h1>
        </div>
        <form className="flex flex-col gap-2">
          <TextArea title="Cómo fue tu experiencia?" className="text-primary" />
          <Button
            styleType="primary"
            rounded
            icon={faPaperPlane}
            className="w-1/3 self-center"
          >
            Publicar
          </Button>
        </form>
      </div>
    </div>
  )
}
