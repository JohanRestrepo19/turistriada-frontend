import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Rating, TextArea } from '@/common/components'

export const MakePlaceReview = () => {
  return (
    <div className="card bg-white h-[300px] shadow-xl">
      <div className="card-body">
        <div className="card-title text-primary mb-2 flex justify-between">
          <div>
            <span className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCircleCheck} size="2x" />
              Deja tu comentario!
            </span>
          </div>
          <Rating />
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
